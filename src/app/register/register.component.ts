import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide=true;

  registerUserData = { name: "", email: "", password: "" }
  
  registerData={
    // username:new FormControl('',[Validators.required,Validators.minLength(2)]),
    name:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)])
  }
  
 
  
  getErrorMessage() {
    if (this.registerData.email.hasError('required')) {
      return 'Email is required';
    }
    else if(this.registerData.email.hasError('email')){
      return 'Email must be a valid email Address';
    }
  }
  getError(){
    if (this.registerData.password.hasError('required')) {
      return 'Password is required';
    }
    else if(this.registerData.password.hasError('minlength')){
      return 'Password must be a minimum length of 6';
    }
  }
  getMessage(){
    if (this.registerData.name.hasError('required')) {
      return 'Name is required';
    }
    else if(this.registerData.name.hasError('minlength')){
      return 'Name must be a minimum length of 2';
    }
  }

  constructor(private _auth: AuthService,
              private _router: Router,private snackbar:MatSnackBar) { }

  ngOnInit() {
  }

  registerUser() {
    this.registerUserData.email=this.registerData.email.value;
    this.registerUserData.name=this.registerData.name.value;
    this.registerUserData.password=this.registerData.password.value;
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        this.snackbar.open('USER REGISTERED SUCCESSFULL', 'OK', {
          duration: 3000,
        });
        localStorage.setItem('token', res.token)
        this._router.navigate(['/home'])
      },
      err => {
        if( err instanceof HttpErrorResponse ) {
          if (err.status === 409) {
            this.snackbar.open('EMAIL ALREADY REGISTERED', 'OK', {
              duration: 3000,
            });
            this.registerData.email.reset();
            this.registerData.name.reset();
            this.registerData.password.reset();
            this.registerUserData.name="";
            this.registerUserData.email="";
            this.registerUserData.password="";
          }
        }
      }
    )      
  }
}  