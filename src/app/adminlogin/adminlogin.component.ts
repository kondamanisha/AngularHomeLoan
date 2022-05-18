import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {

  data = false;    
  contactForm: any;    
  message!:string;    
  constructor(private formbulider: FormBuilder,private router: Router,private loginService:UserService) { } 


  ngOnInit(): void {
    this.contactForm = new FormGroup({
      emailid:new FormControl('',Validators.required),
      password: new FormControl('', Validators.required)
      
    });
  }
  get emailid() {
    return this.contactForm.get('emailid');
  }
  get password() {
    return this.contactForm.get('password');
  }
  Onsubmit()
  {
    console.log(this.contactForm.value)
    this.loginService.AdminLogin(this.contactForm.value).subscribe((res)=>{
      console.log();
      this.router.navigate(['viewrequest'])
    })    
  }

}
