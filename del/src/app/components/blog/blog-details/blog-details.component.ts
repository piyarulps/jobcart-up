import { Component, OnInit, HostListener } from '@angular/core';
import { GlobalService } from './../../../services/global.service';
import { HttpResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { environment   } from '../../../../environments/environment';
import { Title, Meta   } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService    } from 'src/app/services/api.service';
import { BlogObj       } from 'src/app/objects/BlogObj';

@Component({
  selector    : 'app-blog-details',
  templateUrl : './blog-details.component.html',
  styleUrls   : ['./blog-details.component.css'],
})
export class BlogDetailsComponent {

    
  blogAPI  = environment.blog_api;
  appUrl   = environment.app_url;
  postAPI  = environment.post_api;

  blogId   = 0;
  dataList = [];
  blogList = [];
  blogInst!: BlogObj;
  //blog_temp = "<p><span style=\"background-color: transparent;\">While recruiters may play a strategic role in any business, they frequently just care about finding a qualified candidate at a fair price in a timely manner. However, in my opinion, this kind of recruiting is a bureaucratic task that can be automated with the help of an applicant tracking system (ATS), a chatbot, and a robot. Conversely, when desirable candidates are few, a strategic recruiter is able to steadily increase expectations for them. Simple jobs should be given to robots. In the future, there will be more challenging positions to fill, thus tomorrow's recruiter will need to be able to handle them. This is the starting point.&nbsp;</span></p><p><br></p><h2><span style=\"background-color: transparent;\">How to be an effective Recruiter in today's competitive job market</span></h2><p><br></p><p><span style=\"background-color: transparent;\">1. have experience doing the work. An effective recruiter should be prepared to answer the question \"Tell me about the job?\" from a top prospect by outlining some of the duties and responsibilities of the position and explaining why they are crucial. If they don't realize what they're missing, the individual is more likely to opt-out.</span></p><p><br></p><p><span style=\"background-color: transparent;\">2. you should interview well. Hiring managers won't have faith in the recruiter's judgment, and the recruiter will have to present an excessive number of prospects if they can't conduct interviews professionally and accurately. The worst part is that the top performers won't see them as a consultant, but rather a gatekeeper.</span></p><p><br></p><p><span style=\"background-color: transparent;\">3. disregard criticism. The top applicants, whether they are actively seeking work or not, will give you a litany of reasons why they aren't interested. In order to have a meaningful talk about your job, you will need to be persistent and have answers to their complaints.</span></p><p><br></p><p><span style=\"background-color: transparent;\">4. Turn non-active job-seekers into active salespeople. Selling an amazing job with empty superlatives and cliches isn't what recruiting is about. You need to sell your employment as the greatest, even if the pay isn't, to someone who isn't actively hunting for work.</span></p><p><br></p><p><span style=\"background-color: transparent;\">5. Create messages that are captivating. There is no magic set of abilities or \"must-have\" competencies that can guarantee you the best and brightest employees. The key is to create riveting, narrative-based ads like this one that prompts a response.</span></p><p><br></p><p><span style=\"background-color: transparent;\">6. the finalists' primary sources. Those who made it to the semi-final round were likely well-regarded by the recruiting manager and would take a salary rise of up to ten percent.</span></p><p><br></p><p><span style=\"background-color: transparent;\">7. find excellent competent recommendations. These people are gold for recruiters since they respond to your call and are excellent candidates for the position.</span></p><p><br></p><p><span style=\"background-color: transparent;\">8. bargain for proposals that include small raises in pay. This is simple to achieve if the prospect is unemployed or desperate, but the goal is to get them to concentrate on the long-term career potential rather than the immediate financial benefits. The recruiter, hiring manager, and applicant all have more work ahead of them, but it will be well worth it in the end.&nbsp;</span></p><p><br></p><p><span style=\"background-color: transparent;\">9. Make yourself a fascinating person. Include the line \"Let's talk even if this job isn't perfect\" in your profile. I can get you a better position, or help you get started on a more promising career path, at one of my other companies.</span></p><p><br></p><p><span style=\"background-color: transparent;\">10. Use analytics and a \"small batch, high touch\" approach to managing your talent pool. One exceptional prospect is all you need to make a successful hiring. You only need a few A-listers, a well-oiled recruitment machine, and an out-of-this-world experience for your candidates.</span></p><p><br></p><p><span style=\"background-color: transparent;\">The main line is that talking about a prospective positive career change, rather than an unfilled position, is the best way to attract and retain top people. Don't stress about finding cheap and quick replacements for vacant roles. Slowing down can help you offer fewer prospects to hiring managers who will perceive your opening as the ideal career step, so you can focus on improving the quality of employees at your organization. Time-to-fill and cost-per-hire may be decreased and the quality of hiring increased via increased use of referrals and the cultivation of deep-talent networks.&nbsp;</span></p><p><br></p><p><span style=\"background-color: transparent;\">Recruiters need to create a high-touch, individualized approach that makes use of technology without being beholden to it if they want to continue to be successful. The quality of the individuals employed in the future, in my view, will rely on the quality of the recruiters recruited now, and getting good recruiters begins with learning and practicing the ten skills listed above.</span></p>"


  constructor(private _httpService:GlobalService, private router: Router, 
    public _activatedRoute: ActivatedRoute,  private meta: Meta, private titleService: Title) { 

    this.blogId = this._activatedRoute.snapshot.params['id'];    

  }


  

  ngOnInit(): void {

    this.getBlogData();
    /*
    this.apiService.getPosts().subscribe((res) => {
      this.blogList = res;
      console.log(res);
    });
    */

  }




  getBlogData(){

    this.dataList = [];
    this.blogInst = new BlogObj();
    /*
    const options = {
      headers: new HttpHeaders({
        'Content-type':'application/json','blogId':this.blogId.toString()
      })
    };
    */
    const options = { headers: new HttpHeaders({ 'Content-type':'application/json','blogId':this.blogId.toString() }) };
    const APIResp = this._httpService.httpHeadersCall(this.blogAPI + 'blog-api/web-blog', options);
    APIResp.subscribe(
      response => {

        var tmp = JSON.parse(JSON.stringify(response));
        console.log(tmp.data);
        if(tmp !=null && tmp.meta.code === 200){
          
          this.dataList = tmp.data[0];

          this.blogInst.blogId     = tmp.data[0].blogId;
          this.blogInst.blogTitle  = tmp.data[0].blogTitle;
          this.blogInst.blogDescp  = tmp.data[0].blogDescp;
          this.blogInst.blogImgFP  = tmp.data[0].blogImgFullPath;
          this.blogInst.imgCaption = tmp.data[0].imgCaption;
          this.blogInst.createdDt  = tmp.data[0].createdDt;

          this.titleService.setTitle(tmp.data[0].pageTitle);
          this.meta.addTags([
            { name: 'keywords',     content: tmp.data[0].pageKeywords },  
            { name: 'description',  content: tmp.data[0].pageDescp },
            { name: 'robots',       content: 'index, follow' },
            { charset: 'UTF-8' }
          ]);
        }

      },
      error => {
        var tmp = JSON.parse(JSON.stringify(error));
        console.log(tmp);
       },
      () => { }
    );


  }




}
