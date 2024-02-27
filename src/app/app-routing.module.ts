import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SourceAndAttractComponent } from './components/source-and-attract/source-and-attract.component';
import { CollaborateComponent } from './components/collaborate/collaborate.component';
import { AutomateAndHireComponent } from './components/automate-and-hire/automate-and-hire.component';
import { HrisComponent } from './components/hris/hris.component';
import { BlogListComponent } from './components/blog/blog-list/blog-list.component';
import { BlogDetailsComponent } from './components/blog/blog-details/blog-details.component';
import { AboutComponent } from './components/about/about.component';
import { PolicyCookieComponent } from './components/policy-cookie/policy-cookie.component';
import { PolicyPrivacyComponent } from './components/policy-privacy/policy-privacy.component';
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

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'staffing-solutions',
    component: StaffingSolutionsComponent,
  },
  {
    path: 'temporary-employment',
    component: TempEmploymentComponent,
  },
  {
    path: 'direct-hires',
    component: DirectHiresComponent,
  },
  {
    path: 'temporary-to-permanent',
    component: TemporaryToPermanentComponent,
  },
  {
    path: 'community-recruiter',
    component: CommunityRecruiterComponent,
  },
  {
    path: 'job-order',
    component: JobOrderComponent,
  },
  {
    path: 'placement-and-fulfillment',
    component: PlacementFullfillmentComponent,
  },
  {
    path: 'timesheet-management',
    component: TimesheetMgtComponent,
  },
  {
    path: 'budgeting-and-reporting',
    component: BudgetingAndReportingComponent,
  },
  {
    path: 'pricing',
    component: PricingComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: 'terms-of-service',
    component: PolicyPrivacyComponent,
  },
  {
    path: 'cookie-policy',
    component: PolicyCookieComponent,
  },
  {
    path: 'scout-and-entice',
    component: SourceAndAttractComponent,
  },
  {
    path: 'explore-appraise-and-unite',
    component: CollaborateComponent,
  },
  {
    path: 'recruit-top-talent',
    component: AutomateAndHireComponent,
  },
  {
    path: 'digital-staffing',
    component: DigitalStaffingComponent,
  },
  {
    path: 'hr-software',
    component: HrisComponent,
  },
  {
    path: 'blog',
    component: BlogListComponent,
  },
  {
    path: 'blog/:id',
    component: BlogDetailsComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
