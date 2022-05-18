import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-loandetails',
  templateUrl: './loandetails.component.html',
  styleUrls: ['./loandetails.component.scss']
})
export class LoandetailsComponent implements OnInit {

  data = false;    
  contactForm: any;    
  message!:string;    
  constructor(private formbulider: FormBuilder,private router: Router,private loginService:UserService) { } 

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      bankaccountno: new FormControl(''),
      emailid: new FormControl(''),
      maxloan:new FormControl(''),
      loanamount: new FormControl(''),
      loantenure: new FormControl(''),
      emi: new FormControl(''),
      loandate: new FormControl('')
      
    });
  }
  get bankaccountno() {
    return this.contactForm.get('bankaccountno');
  }
 
  get emailid() {
    return this.contactForm.get('emailid');
  }
  get maxloan(){
    return this.contactForm.get('maxloan')
  }
  get loanamount() {
    return this.contactForm.get('loanamount');
  }
  get loantenure() {
    return this.contactForm.get('loantenure');
  }
  get emi(){
    return this.contactForm.get('emi');
  } 
  get loandate() {
    return this.contactForm.get('loandate');
  }
  
  Onsubmit()
  {
    console.log(this.contactForm.value)
    this.loginService.LoanDetails(this.contactForm.value).subscribe((res)=>{
      console.log(res);
    })    
  }
}
