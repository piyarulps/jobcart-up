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
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
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
    path: 'source-and-attract',
    component: SourceAndAttractComponent,
  },
  {
    path: 'collaborate',
    component: CollaborateComponent,
  },
  {
    path: 'automate-and-hire',
    component: AutomateAndHireComponent,
  },
  {
    path: 'hris',
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
