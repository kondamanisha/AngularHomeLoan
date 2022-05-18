import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-eligibilitycal',
  templateUrl: './eligibilitycal.component.html',
  styleUrls: ['./eligibilitycal.component.scss']
})
export class EligibilitycalComponent implements OnInit {

  monthlyInterestRatio!:number;
  E!:any;
  contactForm = new FormGroup({
    minc: new FormControl('',[Validators.required,Validators.min(10000),Validators.max(10000000),Validators.pattern("^[0-9]*$")]),
   
    roi!:new FormControl('',[Validators.required,Validators.min(5),Validators.max(15)]),
  })
  constructor() { }

  ngOnInit(): void {
  }
  get minc() {
    return this.contactForm.get('minc');
  }
  
  get roi() {
    return this.contactForm.get('roi');
  }
  onSubmit() {
    console.log(this.contactForm.value);
    this.monthlyInterestRatio = (this.contactForm.value.roi/100)/12;
    console.log(this.monthlyInterestRatio);
    var top = this.contactForm.value.minc
console.log(top);
var bottom = top*0.6;
console.log(bottom);
this.E = 60*bottom;
console.log(this.E);

  

}

}
