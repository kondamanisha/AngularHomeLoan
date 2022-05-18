import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Personal } from '../personal';

import { UserService } from '../user.service';

@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.scss']
})
export class PersonaldetailsComponent implements OnInit {

  productForm = new FormGroup({
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
    
  })
  p !: Personal;
  EmailId ="john@gmail.com";
  constructor(public personalservice: UserService, private router:ActivatedRoute) {
   personalservice.getByEmail(this.EmailId).subscribe((data)=>
     this.productForm=new FormGroup({
      firstName:new FormControl(data["FirstName"]),
      lastName:new FormControl(data["LastName"]),
      emailid:new FormControl(data["EmailId"]),
      password:new FormControl(data["Password"]),
      phoneNumber:new FormControl(data["PhoneNumber"]),
      dob:new FormControl(data["Dob"]),
      gender:new FormControl(data["Gender"]),
      nationality:new FormControl(data["Nationality"]),
      aadharno:new FormControl(data["AadharNo"]),
      pancardno:new FormControl(data["PanCardNo"])
  })
  )
}
 ngOnInit(): void {
 }
}
