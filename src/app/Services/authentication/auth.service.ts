import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstant } from '../../Shared/app-constant';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router:Router) { }
  public redirectUrl='';
  
  isLoggedIn(){
      if(sessionStorage.getItem(AppConstant.token)!=null)
         return true;
      else
         return false;
  }

  validateLogin(data:any){
    if(data!=null){
      if(data.email=="test@gmail.com" && data.password=="password"){
        sessionStorage.setItem(AppConstant.token,'abc');
        return true;
      }
      else{
        sessionStorage.removeItem(AppConstant.token);
        return false;
      }
    }
    
    return false;
  }

  logout(){
    sessionStorage.removeItem(AppConstant.token);
    this.router.navigate(['/login']);
  }

  getToken(){
   return sessionStorage.getItem(AppConstant.token);
  }
}
