import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {HttpClient} from '@angular/common/http';  
import {HttpHeaders} from '@angular/common/http';  
import { from, Observable } from 'rxjs'; 
import { Register } from './register';
import { Userlogin } from './userlogin';
import { Adminlogin } from './adminlogin';
import { Loanrequest } from './loanrequest';
import { Loandetails } from './loandetails';
import { Personal } from './personal';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  public subject=new Subject<boolean>();
  
  Url :string;  
  token! : string;
  header : any;  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      
    })}

  constructor(private http : HttpClient) {
     this.Url='http://localhost:47020/api/user';
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    
    const headerSettings: {[name: string]: string | string[]; } = {};  
    this.header = new HttpHeaders(headerSettings);  
   }

   recievedStatus():Observable<boolean>
   {
     return this.subject.asObservable();
   }
   
   Login(model : any){        
     return this.http.post<any>(this.Url+'/UserLogin',JSON.stringify(model),this.httpOptions );  
   }  
   AdminLogin(model : any){        
    return this.http.post<any>(this.Url+'/adminLogin',JSON.stringify(model),this.httpOptions );  
  }
    /* CreateUser(register:Register)  
    {  
     return this.http.post<Register[]>(this.Url + '/createcontact/', register, this.httpOptions)  
    }  */ 
    Register(register:Register)  
    {      
     return this.http.post<Register>(this.Url , JSON.stringify (register), this.httpOptions)  
    } 
    LoanRequest(register:Loanrequest)  
    {      
     return this.http.post<Loanrequest>(this.Url+'/loanreq' , JSON.stringify (register), this.httpOptions)  
    } 
    
    LoanDetails(register:Loandetails)  
    {      
     return this.http.post<Loandetails>(this.Url+'/loandet' , JSON.stringify (register), this.httpOptions)  
    } 

    GetAll():Observable<Loanrequest[]>
    {
    return this.http.get<Loanrequest[]>(this.Url);
    }
    
    getById(Cardid:number): Observable<Loanrequest> {
    return this.http.get<Loanrequest>(this.Url+'/'+ Cardid)
    }
    
    Adminapprove(id: number, model : Loanrequest){
    return this.http.put<Loanrequest>(this.Url+'/Approval/'+id,JSON.stringify(model),this.httpOptions);
    }

    getByEmail(emailid:string): Observable<Personal>
  {
    return this.http.get<Personal>(this.Url + '/getbyemail/'+ emailid);
  }

  getloan(emailId:string): Observable<Personal> 
  {
    
    return this.http.get<Personal>(this.Url + '/getloan/'+ emailId);
  }
  getStatus(emailId:string): Observable<Personal> 
  {
    return this.http.get<Personal>(this.Url + '/getStatus/'+ emailId);
  }
  trackbyid(id:number): Observable<any> {
    return this.http.get<any>(this.Url + '/trackerbyid/' + id)
  }

  isUserExist(mailid : any){
    return this.http.get<any>(this.Url+'/userDetails/'+ mailid);
}

updatePassword(mailid:string,userData : any){  
  console.log(JSON.stringify(userData))
      return this.http.put<any>(this.Url+'/updatePassword/'+mailid,JSON.stringify(userData),this.httpOptions );  
}
 }

