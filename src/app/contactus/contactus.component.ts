import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ContactusService } from '../services/contactus.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  hide=true;
  registerUserData = {contactus:"", name:"", phone:"", email: "" }

  registerData={
    contactus:new FormControl('',[Validators.required]),
    name:new FormControl('',[Validators.required]),
    phone:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
  }

  getMessageEmail() {
    if (this.registerData.email.hasError('required')) {
      return 'Email is required';
    }
    else if(this.registerData.email.hasError('email')){
      return 'Email must be a valid email Address';
    }
  }
  getMessageName(){
    if (this.registerData.name.hasError('required')) {
      return 'Name is required';
    }
    else if(this.registerData.name.hasError('minlength')){
      return 'Name must be a minimum length of 2';
    }
  }
  getMessageForm(){
    if (this.registerData.contactus.hasError('required')) {
      return 'Feedback with Content is required';
    }
  }

  getMessagePhone(){
    if (this.registerData.phone.hasError('required')) {
      return 'Phone Number is required';
    }
  }

  constructor(private _auth: AuthService,
    // private _book: BookService,
    // private _donate:DonateService,
    private _contactus:ContactusService,
    private _router: Router,private snackbar:MatSnackBar) { 
    }
    ngOnInit() {
    }
  
    registerUser() {
      this.registerUserData.name=this.registerData.name.value;
      this.registerUserData.contactus=this.registerData.contactus.value;
      this.registerUserData.phone=this.registerData.phone.value;
      this.registerUserData.email=this.registerData.email.value;
      this._contactus.contactus(this.registerUserData)
      .subscribe(
        res => {
          this.snackbar.open('Your Feedback is Submitted SUCCESSFULLY', 'Thank You!', {
            duration: 3000,
          });
          this.registerData.name.reset();
          this.registerData.email.reset();
          this.registerData.phone.reset();
          this.registerData.contactus.reset();
          this.registerUserData.name="";
          this.registerUserData.email="";
          this.registerUserData.phone="";
          this.registerUserData.contactus="";
        },
        err => {
          if( err instanceof HttpErrorResponse ) {
            if (err.status === 409) {
              this.snackbar.open('Oops! Something went wrong,', 'Try Again Please!', {
                duration: 3000,
              });
            }
          }
        }
      )      
    }
  } 