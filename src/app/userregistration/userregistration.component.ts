import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Loanrequest } from '../loanrequest';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.scss']
})
export class UserregistrationComponent implements OnInit {
  data = false;    
  contactForm: any;    
  message!:string;    
  constructor(private formbulider: FormBuilder,private router: Router,private loginService:UserService) { } 


  ngOnInit(): void {
    this.contactForm = new FormGroup({
      firstName: new FormControl('',[Validators.required,Validators.minLength(10)]),
      lastName: new FormControl('',[Validators.required, Validators.minLength(10), Validators.pattern("^[a-zA-Z]+$")]),
      emailid:new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required, Validators.maxLength(10)]),
      phoneNumber: new FormControl('',[Validators.required,Validators.minLength(10)]),
      dob: new FormControl(''),
      gender: new FormControl(''),
      nationality: new FormControl('',[Validators.required]),
      aadharno: new FormControl('',[Validators.required, Validators.minLength(12)]),
      pancardno : new FormControl('',[Validators.required])
      
    });
  }
  get firstName() {
    return this.contactForm.get('firstName');
  }
 
  get lastName() {
    return this.contactForm.get('lastName');
  }
  get dob(){
    return this.contactForm.get('dob')
  }
  get emailid() {
    return this.contactForm.get('emailid');
  }
  get gender() {
    return this.contactForm.get('gender');
  }
  get phoneNumber(){
    return this.contactForm.get('phoneNumber');
  } 
  get password() {
    return this.contactForm.get('password');
  }
  get nationality() {
    return this.contactForm.get('nationality');
  }
  get aadharno() {
    return this.contactForm.get('aadharno');
  }
  get pancardno() {
    return this.contactForm.get('pancardno');
  }
  Onsubmit()
  {
    console.log(this.contactForm.value)
    this.loginService.Register(this.contactForm.value).subscribe((res)=>{
      console.log(res);
    })    
  }

  // GetAll():Observable<Loanrequest[]>
  // {
  //   return this.http.get<Loanrequest[]>(this.Url);
  // }
  // getById(id:number): Observable<Loanrequest> {
  //   return this.http.get<Loanrequest>(this.Url+'/'+ id)
  // }
}
