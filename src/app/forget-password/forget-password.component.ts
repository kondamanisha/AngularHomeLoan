import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  isUserExist:boolean=false;
  passwordreset:boolean=false;
  mail:any=null;

  constructor(private loginService:UserService, _router: Router) { }

  ngOnInit(): void {
  }

  submitForm(userMailId:HTMLInputElement):void{
    this.isUserExist=false;
    this.mail =userMailId.value; 

    this.loginService.isUserExist(userMailId.value).subscribe((res:any)=>{
      if(res.length!=0){
        this.isUserExist=true;
      }
      else{
        alert('Please create account first');
      
      }
    }) 
  }
  changePassword(newPassword:HTMLInputElement,reNewPassword:HTMLInputElement,_passwordGiven:any):void{
    console.log(newPassword.value)
    if(newPassword.value!="" &&  reNewPassword.value!="" ){
      this.passwordreset = false;
    if(newPassword.value==reNewPassword.value){
     let obj = {
       "Password":newPassword.value,
       "EmailId":this.mail
     };
      this.loginService.updatePassword(this.mail,obj).subscribe((res)=>{
        this.passwordreset=true;
      }) 
    //  alert('Password has been reset successfully !!!')
    //   this.isUserExist=true;
    }
    else{
      alert('Input fileds mismatched');
    }
    }else{
      alert('Password cannt be null');
    }
  }

}
