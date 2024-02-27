import { Component, OnInit, HostListener } from '@angular/core';
import { Router        } from '@angular/router';
import { GlobalService } from './../../services/global.service';
import { environment   } from '../../../environments/environment';
import { Title, Meta   } from '@angular/platform-browser';
import { CatObj } from 'src/app/objects/CatObj';

@Component({
  selector    : 'app-home',
  templateUrl : './home.component.html',
  styleUrls   : ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  appUrl  = environment.app_url;
  postAPI = environment.post_api;

  catList  : Array<CatObj> = [];
  winWidth  = 0;
  url = "https://my.jobcart.ca/";

  constructor(private _httpService:GlobalService, private router: Router, private meta: Meta, private titleService: Title) { 
 
    /*
    if(Number(localStorage.getItem('usrId'))>0){
      this.name = localStorage.getItem('name');
      this.userLoggedIn = true;
    }
    */
    

  }



  ngOnInit(): void {

    this.winWidth = window.innerWidth;
    
    if(this.winWidth<=900){
      this.url = "https://onelink.to/ymhfht";
    }else{
      this.url = "https://my.jobcart.ca/";
    }
    
    this.getCatData();

    //this.meta.addTag({ name: 'description', content: 'Welcome to the JobCart.' });

    /*this.meta.addTags([
      { name: 'description', content: 'This is an article about Angular Meta service' },
      { name: 'keywords', content: 'angular, javascript, typescript, meta, seo' }  
    ]);
    */

    this.titleService.setTitle('Welcome To JobCart');
    this.meta.addTags([
      { name: 'keywords',     content: 'job search, jobcart, jobs, search engine for jobs, job search engine, job listings, search jobs, career, employment, work, find jobs, rss jobs feed xml , Canada, canadian' },  
      { name: 'robots',       content: 'index, follow' },
      { name: 'description',  content: 'Job Search by JobCart. The #1 job site in Canada. Search millions of jobs from thousands of job boards, newspapers, classifieds and company websites on jobcart.ca' },
      { charset: 'UTF-8' }
    ]);


  }





  getCatData(){

    const APIResp = this._httpService.httpCall(this.postAPI + 'categories-api/list');
    APIResp.subscribe(
      response => {

        var tmp = JSON.parse(JSON.stringify(response));
        //console.log(tmp.data);
        this.catList = tmp.data;

      },
      error => {
        var tmp = JSON.parse(JSON.stringify(error));
       },
      () => { }
    );

  }

  goToJobs(id: string | number, _route: string){

    if(id==1){
      localStorage.setItem('title', 'Search Accommodation');
      localStorage.setItem('keys', 'Search Accommodation, Accommodation in GTA, Accommodation in Kitchener, Accommodation in Brampton, Accommodation in Lonond, Accommodation in Waterloo, Accommodation in Cambridge, Accommodation in Woodstock, Accommodation Canada, Accommodation Ontario');
      localStorage.setItem('descp', 'Search Accommodation by JobCart. The #1 Accommodation site in Canada. Search millions of Accommodations from thousands of people, newspapers, classifieds and company websites on jobcart.ca');
    }else if(id==2){
      localStorage.setItem('title', 'Search Ride Share');
      localStorage.setItem('keys', 'Search Ride Share, Ride Share in GTA, Ride Share in Kitchener, Ride Share in Brampton, Ride Share in Lonond, Ride Share in Waterloo, Ride Share in Cambridge, Ride Share in Woodstock, Ride Share Canada, Ride Share Ontario');
      localStorage.setItem('descp', 'Search Ride Share by JobCart. The #1 Ride Share site in Canada. Search millions of Ride Share from thousands of people, newspapers, classifieds and company websites on jobcart.ca');
    }else if(id==3){
      localStorage.setItem('title', 'Search Deals');
      localStorage.setItem('keys', 'Search Deals, Jobs in GTA, Deals in Kitchener, Deals in Brampton, Deals in Lonond, Deals in Waterloo, Deals in Cambridge, Deals in Woodstock, Deals Canada, Deals Ontario');
      localStorage.setItem('descp', 'Search Deals by JobCart. The #1 Deals site in Canada. Search millions of Deals from thousands of people, newspapers, classifieds and company websites on jobcart.ca');
    }else{
      localStorage.setItem('title', 'Search Jobs');
      localStorage.setItem('keys', 'Search Jobs, Jobs in GTA, Jobs in Kitchener, Jobs in Brampton, Jobs in Lonond, Jobs in Waterloo, Jobs in Cambridge, Jobs in Woodstock, Jobs Canada, Jobs Ontario');
      localStorage.setItem('descp', 'Search Jobs by JobCart. The #1 Jobs site in Canada. Search millions of Jobss from thousands of people, newspapers, classifieds and company websites on jobcart.ca');
    }

    /*
    if(_route=='jobs'){
      localStorage.setItem('catId', id.toString());
      this.router.navigate([this.appUrl+"/post/list/"+id]);
    }else{
      this.router.navigate(["/company/homepage/"+id]);
    }
    */
   location.href = this.appUrl+"/post/list/"+id;
    
    
  }



}
