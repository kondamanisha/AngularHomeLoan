import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-emi',
  templateUrl: './emi.component.html',
  styleUrls: ['./emi.component.scss']
})
export class EmiComponent implements OnInit {

  monthlyInterestRatio!:number;
  E!:any;
  
  
  contactForm = new FormGroup({
    lamt: new FormControl('',[Validators.required,Validators.min(10000),Validators.max(10000000),Validators.pattern("^[0-9]*$")]),
    lt: new FormControl('',[Validators.required, Validators.min(12),Validators.max(84),Validators.pattern("^[0-9]*$")]),
    roi!:new FormControl('',[Validators.required,Validators.min(5),Validators.max(15)]),
  })
  

  constructor() { }

  ngOnInit(): void {
  }
  get lamt() {
    return this.contactForm.get('lamt');
  }
  get lt() {
    return this.contactForm.get('lt');
  }
  get roi() {
    return this.contactForm.get('roi');
  }
  
  onSubmit() {
    console.log(this.contactForm.value);
    this.monthlyInterestRatio = (this.contactForm.value.roi/100)/12;
    console.log(this.monthlyInterestRatio);
var top = Math.pow((1+this.monthlyInterestRatio),this.contactForm.value.lt);
console.log(top);
var bottom = top -1;
console.log(bottom);
var sp = top / bottom;
console.log(top);
this.E = ((this.contactForm.value.lamt* this.monthlyInterestRatio) * sp ); 
this.E=Math.round(this.E);
this.E =this.E.toLocaleString('en-GB');
console.log(this.E);
  } 
  }