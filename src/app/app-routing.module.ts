import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DocumentsComponent } from './documents/documents.component';
import { EligibilitycalComponent } from './eligibilitycal/eligibilitycal.component';
import { EmiComponent } from './emi/emi.component';
import { FaqComponent } from './faq/faq.component';
import { FeaturesComponent } from './features/features.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoandetComponent } from './loandet/loandet.component';
import { LoandetailsComponent } from './loandetails/loandetails.component';
import { LoanrequestComponent } from './loanrequest/loanrequest.component';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';
import { TrackerComponent } from './tracker/tracker.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { UserviewstatusComponent } from './userviewstatus/userviewstatus.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { ViewrequestComponent } from './viewrequest/viewrequest.component';

const routes: Routes = [{path:'home',component:HomepageComponent},
{path:'aboutus',component:AboutusComponent},
{path:'adminlogin',component:AdminloginComponent},
{path:'userlogin',component:UserloginComponent},
{path:'userreg',component:UserregistrationComponent},
{path:'faq',component:FaqComponent},
{path:'emi',component:EmiComponent},
{path:'feature',component:FeaturesComponent},
{path:'contact',component:ContactusComponent},
{path:'loanreq',component:LoanrequestComponent},
{path:'viewrequest',component:ViewrequestComponent},
{path:'viewdetails',component:ViewdetailsComponent},
{ path: 'viewdetails/:reqid', component: ViewdetailsComponent },
{path:'eligibilitycal',component:EligibilitycalComponent},
{path:'documents',component:DocumentsComponent},
{path:'userdashboard',component:UserdashboardComponent},
{path:'personaldetails',component:PersonaldetailsComponent},
{path:'tracker',component:TrackerComponent},
{path:'userloandetails',component:LoandetComponent},
{path:'userviewstatus',component:UserviewstatusComponent},
{path:'loandetails',component:LoandetailsComponent},
{path:'forgetpass',component:ForgetPasswordComponent}




];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
