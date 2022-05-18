import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.scss']
})
export class ViewdetailsComponent implements OnInit {

  productForm=new FormGroup({
 
    BankAccountNo :new FormControl(''),
    ReqId :new FormControl(''),
    EmailId:new FormControl(''),
    PropertyName:new FormControl(''),
    Propertystreet:new FormControl(''),
    Propertycity:new FormControl(''),
    Propertystate:new FormControl(''),
    EmploymentType:new FormControl(''),
    OrganizationType:new FormControl(''),
    RetirementAge:new FormControl(''),
    MonthlyIncome:new FormControl(''),
    EstimatedAmount:new FormControl(''),
    RequestEmi:new FormControl(''),
    Tenure:new FormControl(''),
    RequestDate:new FormControl(''),
    Status:new FormControl('')
  })
  constructor(private service:UserService,private router:ActivatedRoute,private rou:Router) { }

 ngOnInit(): void {
  
    console.log(this.router.snapshot.params['reqid'])
    this.service.getById(this.router.snapshot.params['reqid']).subscribe((data)=>{
      console.log(data)
    this.productForm=new FormGroup({
     
      BankAccountNo :new FormControl(data["BankAccountNo"]),
      ReqId:new FormControl(data["ReqId"]),
      EmailId:new FormControl(data["EmailId"]),
      PropertyName:new FormControl(data["PropertyName"]),
      Propertystreet:new FormControl(data["Propertystreet"]),
      Propertycity:new FormControl(data["Propertycity"]),
      Propertystate:new FormControl(data["Propertystate"]),
      EmploymentType:new FormControl(data["EmploymentType"]),
      OrganizationType:new FormControl(data["OrganizationType"]),
      RetirementAge:new FormControl(data["RetirementAge"]),
      MonthlyIncome:new FormControl(data["MonthlyIncome"]),
      EstimatedAmount:new FormControl(data["EstimatedAmount"]),
      RequestEmi:new FormControl(data["RequestEmi"]),
      Tenure:new FormControl(data["Tenure"]),
      RequestDate:new FormControl(data["RequestDate"]),
      Status:new FormControl(data["Status"])
      
     
    })
  })
  }

  submitForm(){
    console.log(this.productForm.value)
    this.service.Adminapprove(this.router.snapshot.params['reqid'],this.productForm.value).subscribe((data)=>{
      console.log();
      this.rou.navigateByUrl('loandetails')

    })    
  }

}
