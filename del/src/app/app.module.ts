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
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, QuillModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
