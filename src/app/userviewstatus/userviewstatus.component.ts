import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Personal } from '../personal';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userviewstatus',
  templateUrl: './userviewstatus.component.html',
  styleUrls: ['./userviewstatus.component.scss']
})
export class UserviewstatusComponent implements OnInit {

  productForm=new FormGroup({
    
    reqid:new FormControl(''),
    requestdate:new FormControl(''),
    status:new FormControl(''),
    })
      p !: Personal;
      emailid ="john@gmail.com";
      constructor(public personalservice: UserService, private router:ActivatedRoute) {
       personalservice.getStatus(this.emailid).subscribe((data)=>
       {
        console.log(data);
       this.productForm=new FormGroup({
    
        reqid:new FormControl(data["ReqId"]),
        requestdate:new FormControl(data["RequestDate"]),
        status:new FormControl(data["Status"])
       })
       } )
     }
     ngOnInit(): void {
    }
}
