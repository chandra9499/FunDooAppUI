
import { Injectable } from '@angular/core';
import { UserhttpService } from '../http/user/userhttp.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private httpService:UserhttpService) {    
    
  }
  signUp(userData: any) {
    return this.httpService.postService("RegisterUser",userData);
  }
  logIn(userData:any):Observable<any>{
     return this.httpService.postService("UserLogin",userData);
  }
}
