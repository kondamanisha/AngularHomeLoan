import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-loanrequest',
  templateUrl: './loanrequest.component.html',
  styleUrls: ['./loanrequest.component.scss']
})
export class LoanrequestComponent implements OnInit {
  data = false;    
  contactForm: any;    
  message!:string;    
  constructor(private formbulider: FormBuilder,private router: Router,private loginService:UserService) { } 


  ngOnInit(): void {
    this.contactForm = new FormGroup({
      bankaccountno: new FormControl(''),
      emailid: new FormControl(''),
      propertyname:new FormControl(''),
      Propertystreet: new FormControl(''),
      propertycity: new FormControl(''),
      propertystate: new FormControl(''),
      employmenttype: new FormControl(''),
      organizationtype: new FormControl(''),
      Retirementage:new FormControl(''),
      monthlyincome : new FormControl(''),
      estimatedamount : new FormControl(''),
      requestEMI : new FormControl(''),
      tenure : new FormControl(''),
      requestdate : new FormControl('')
      
    });
  }
  get bankaccountno() {
    return this.contactForm.get('bankaccountno');
  }
 
  get emailid() {
    return this.contactForm.get('emailid');
  }
  get propertyname(){
    return this.contactForm.get('propertyname')
  }
  get Propertystreet() {
    return this.contactForm.get('Propertystreet');
  }
  get propertycity() {
    return this.contactForm.get('propertycity');
  }
  get propertystate(){
    return this.contactForm.get('propertystate');
  } 
  get employmenttype() {
    return this.contactForm.get('employmenttype');
  }
  get organizationtype() {
    return this.contactForm.get('organizationtype');
  }
  get Retirementage() {
    return this.contactForm.get('Retirementage');
  }
  get monthlyincome() {
    return this.contactForm.get('monthlyincome');
  }
  get estimatedamount() {
    return this.contactForm.get('estimatedamount');
  }
  get requestEMI() {
    return this.contactForm.get('requestEMI');
  }
  get tenure() {
    return this.contactForm.get('tenure');
  }
  get requestdate() {
    return this.contactForm.get('requestdate');
  }
  Onsubmit()
  {
    console.log(this.contactForm.value)
    this.loginService.LoanRequest(this.contactForm.value).subscribe((res)=>{
      console.log(res);
    })    
  }

}
