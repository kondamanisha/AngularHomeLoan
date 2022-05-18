import { Component, OnInit } from '@angular/core';
import { Loanrequest } from '../loanrequest';
import { UserService } from '../user.service';


@Component({
  selector: 'app-viewrequest',
  templateUrl: './viewrequest.component.html',
  styleUrls: ['./viewrequest.component.scss']
})
export class ViewrequestComponent implements OnInit {

  loanstatus!: Loanrequest[];

  constructor(public service: UserService) {
    service.GetAll().subscribe((data)=>{
      this.loanstatus=data;
      console.log(data);
     });
  }

  ngOnInit() {
   
  }

}
