import { Injectable, Component } from '@angular/core';
import { HttpResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root', })
export class GlobalService {

    API_URL:      string  = environment.api_url;
    authAPI:      string  = environment.auth_api;

    accessToken:  string  = '';
    adminId:      string  = '';
    isTokenValid: string  = '';
    userValid:    boolean = false;
  
  
    constructor(private http: HttpClient ) {
  
      //this.accessToken = localStorage.getItem('token');
      //this.adminId     = localStorage.getItem('adminId');
      // console.log( this.accessToken );
  
    }


    public httpCall( _url: string, opts = null ){
      
      if(opts == null){
        const options = { headers: new HttpHeaders({ 'Content-type':'application/json' }) };
        return this.http.get( this.API_URL + _url, options ).pipe(map( response => response ));
      }else{
        const options = opts;
        return this.http.get( this.API_URL + _url, options );
      }  

    }

    public httpHeadersCall( _url: string, opts:{} ){
      
      return this.http.get( this.API_URL + _url, opts );  

    }

    public getHttpData( _url: string, opts = null ){

      if(opts == null){
        const options = {
          headers: new HttpHeaders({ 'Content-type':'application/json','accessToken':this.accessToken })
        };
        return this.http.get( this.API_URL + _url, options ).pipe(map( response => response ));
      }else{
        const options = opts;
        return this.http.get( this.API_URL + _url, options );
      }  

    }


    public getHttpData3rd( _url: string, opts = null ){

      if(opts == null){
        const options = {
          headers: new HttpHeaders({ 'Content-type':'application/json','accessToken':this.accessToken })
        };
        return this.http.get( _url, options ).pipe(map( response => response ));
      }else{
        const options = opts;
        return this.http.get(_url, options);
      }  

    }


  
}