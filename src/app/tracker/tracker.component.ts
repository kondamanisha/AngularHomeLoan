import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent implements OnInit {

  status!:any;
  trackerForm=new FormGroup({
    reqid:new FormControl(''),
    accno:new FormControl('')
  })
  constructor(private service:UserService,private router:ActivatedRoute,private rou:Router) { }
 ngOnInit(): void {
    //console.log(this.router.snapshot.params['productid'])
   
  /*   this.service.getById(this.router.snapshot.params['trackerid']).subscribe((data)=>
    this.trackerForm=new FormGroup({
    reqid:new FormControl(data["reqid"]),
      accno:new FormControl(data["accno"]) 
      
    })
  ) */
  }
  submitForm(){
    console.log(this.trackerForm.value.reqid)
    this.service.trackbyid(this.trackerForm.value.reqid).subscribe((data)=>{
    this.status=data["Status"]
      console.log(data)
    }
    )
  }
}
