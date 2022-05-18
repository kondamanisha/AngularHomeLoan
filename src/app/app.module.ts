import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarousalComponent } from './carousal/carousal.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { HomeFeaturesComponent } from './home-features/home-features.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { MenuComponent } from './menu/menu.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { LoanrequestComponent } from './loanrequest/loanrequest.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FaqComponent } from './faq/faq.component';
import { LoandetailsComponent } from './loandetails/loandetails.component';
import { EmiComponent } from './emi/emi.component';
import { FeaturesComponent } from './features/features.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DocumentsComponent } from './documents/documents.component';
import { ViewrequestComponent } from './viewrequest/viewrequest.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { EligibilitycalComponent } from './eligibilitycal/eligibilitycal.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';
import { TrackerComponent } from './tracker/tracker.component';
import { LoandetComponent } from './loandet/loandet.component';
import { UserviewstatusComponent } from './userviewstatus/userviewstatus.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CarousalComponent,
    HomeAboutComponent,
    HomeFeaturesComponent,
    AboutusComponent,
    AdminloginComponent,
    MenuComponent,
    UserloginComponent,
    UserregistrationComponent,
    LoanrequestComponent,
    FaqComponent,
    LoandetailsComponent,
    EmiComponent,
    FeaturesComponent,
    ContactusComponent,
    DocumentsComponent,
    ViewrequestComponent,
    ViewdetailsComponent,
    EligibilitycalComponent,
    UserdashboardComponent,
    PersonaldetailsComponent,
    TrackerComponent,
    LoandetComponent,
    UserviewstatusComponent,
    ForgetPasswordComponent
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
