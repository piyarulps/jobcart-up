import { Component, OnInit } from '@angular/core';
import { GlobalService } from './../../services/global.service';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {

  glbAPI = environment.global_api;

  alert = ''; 
  msg   = 'Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.';
  CustomForm : FormGroup | undefined;
  data = new webisteForm();
  
  email   = '';
  mobile  = '';
  subject = '';
  message = '';

  
  constructor(private _httpService:GlobalService, private _formBuilder: FormBuilder){ 

  }


  ngOnInit(): void{

    this.loadForm();
    

  }


  loadForm(){
    this.CustomForm = this._formBuilder.group({
      email    : ['', Validators.required],      
      mobile   : ['', Validators.required],
      subject  : ['', Validators.required],
      msg      : ['', Validators.required]      
    }, { });
  }



  postForm(){

    const headers = { 
      'Content-type':'application/json', 
    };
    
    this.data = new webisteForm()
    this.data.email   = this.email;
    this.data.mobile  = this.mobile;
    this.data.subject = this.subject;
    this.data.message = this.message;

    //console.log(headers); console.log(this.data);

    const APIResp = this._httpService.postHttpData(this.glbAPI+'glb-api/website-form', this.data, headers);

    APIResp.subscribe(
      (response: any) => {

        var tmp = JSON.parse(JSON.stringify(response));
        //console.log(tmp);

        if(tmp.meta.code === 200){
          this.alert = 'success';
          this.msg   = tmp.meta.message;
          setTimeout(() => {   }, 500);
        }

      },
      (error: any) => {
        var tmp = JSON.parse(JSON.stringify(error));
        //console.log(tmp);
        this.alert = 'danger';
        this.msg   = "Error occured.";
      },
      ()   => { }
    );
    
  
  }



}

class webisteForm{
  email   = '';
  mobile  = '';
  subject = '';
  message = '';
}