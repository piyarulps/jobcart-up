import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root', })
export class ApiService {
  
  apiUrl = 'https://dummyjson.com/products';
  API_URL:      string  = environment.api_url;
  authAPI:      string  = environment.auth_api;

  accessToken:  string  = '';
  adminId:      string  = '';
  isTokenValid: string  = '';
  userValid:    boolean = false;
  

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }


  
  
}
