import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/authentication/auth.service';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private authService:AuthService) { }
  loginForm:FormGroup;
  isSubmited=false;
  ngOnInit() {
    this.loginForm=new FormGroup({
      email:new FormControl('',[Validators.required,Validators.pattern(/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/)]),
      password:new FormControl('',[Validators.required])
    });
  }

  checkLogin(form:any){
    if(form.valid){
    if(this.authService.validateLogin(form.value)){
      this.router.navigate(['/dashboard']);
    }
    else{
      this.router.navigate(['/login']);
    }
  }
  else{
  this.isSubmited=true;
  }
  }
}
