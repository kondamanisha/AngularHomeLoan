import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Loandetails } from '../loandetails';
import { UserService } from '../user.service';

@Component({
  selector: 'app-loandet',
  templateUrl: './loandet.component.html',
  styleUrls: ['./loandet.component.scss']
})
export class LoandetComponent implements OnInit {

  contactForm = new FormGroup({
    maxloan:new FormControl(''),
    loanamount: new FormControl(''),
    loantenure: new FormControl(''),
    emi: new FormControl(''),
    loandate: new FormControl('')
    
  })
  
  p !: Loandetails;
  emailId ="john@gmail.com";

  constructor(public service: UserService, private router:ActivatedRoute) {
    
   service.getloan(this.emailId).subscribe((data)=>{
   console.log(data);
   this.contactForm=new FormGroup({
    maxloan:new FormControl(data["MaxLoan"]),
    loanamount:new FormControl(data["LoanAmount"]),
    loantenure:new FormControl(data["LoanTenure"]),
    emi:new FormControl(data["Emi"]),
    loandate:new FormControl(data["LoanDate"])
    })
  })
  
}

  ngOnInit(): void {
    
  }
}
