import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SourceAndAttractComponent } from './components/source-and-attract/source-and-attract.component';
import { CollaborateComponent } from './components/collaborate/collaborate.component';
import { AutomateAndHireComponent } from './components/automate-and-hire/automate-and-hire.component';
import { HrisComponent } from './components/hris/hris.component';
import { LetsGrowComponent } from './components/shared/lets-grow/lets-grow.component';
import { BlogListComponent } from './components/blog/blog-list/blog-list.component';
import { BlogDetailsComponent } from './components/blog/blog-details/blog-details.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './components/about/about.component';
import { PolicyCookieComponent } from './components/policy-cookie/policy-cookie.component';
import { PolicyPrivacyComponent } from './components/policy-privacy/policy-privacy.component';
import { QuillModule } from "ngx-quill";
import { DigitalStaffingComponent } from './components/digital-staffing/digital-staffing.component';
import { StaffingSolutionsComponent } from './components/staffing-solutions/staffing-solutions.component';
import { TempEmploymentComponent } from './components/temp-employment/temp-employment.component';
import { DirectHiresComponent } from './components/direct-hires/direct-hires.component';
import { TemporaryToPermanentComponent } from './components/temporary-to-permanent/temporary-to-permanent.component';
import { CommunityRecruiterComponent } from './components/community-recruiter/community-recruiter.component';
import { JobOrderComponent } from './components/job-order/job-order.component';
import { PlacementFullfillmentComponent } from './components/placement-fullfillment/placement-fullfillment.component';
import { TimesheetMgtComponent } from './components/timesheet-mgt/timesheet-mgt.component';
import { BudgetingAndReportingComponent } from './components/budgeting-and-reporting/budgeting-and-reporting.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    PricingComponent,
    ContactUsComponent,
    SourceAndAttractComponent,
    CollaborateComponent,
    AutomateAndHireComponent,
    HrisComponent,
    LetsGrowComponent,
    BlogListComponent,
    BlogDetailsComponent,
    AboutComponent,
    PolicyCookieComponent,
    PolicyPrivacyComponent,
    DigitalStaffingComponent,
    StaffingSolutionsComponent,
    TempEmploymentComponent,
    DirectHiresComponent,
    TemporaryToPermanentComponent,
    CommunityRecruiterComponent,
    JobOrderComponent,
    PlacementFullfillmentComponent,
    TimesheetMgtComponent,
    BudgetingAndReportingComponent,
    
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule,HttpClientModule, QuillModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
