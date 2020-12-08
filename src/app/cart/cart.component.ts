import { Component, Inject, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { DialogData } from '../apple1/apple1.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  qty=1;
  hide=true;
  registerUserData = {userid:null, name:"", price:null,quantity:"",imageUrl:""}

  registerData={
    name:new FormControl('',[Validators.required]),
    // price:new FormControl('',[Validators.required]),
    quantity:new FormControl('',[Validators.required])
  }
  

  constructor(private _authService: AuthService,
              private _cart: CartService,
              private route: ActivatedRoute,
              private _router: Router,
              private snackbar:MatSnackBar,
              public dialogRef: MatDialogRef<CartComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) { 
              }

              onNoClick(): void {
                this.dialogRef.close();
              }

  ngOnInit() {
    // let place = this.route.snapshot.params['name'];
    this.registerData.name.setValue(this.data.name)
    }

  registerUser() {
    if(this._authService.getToken()){
      this._authService.getUserId().subscribe((data)=>{
        this.registerUserData.userid=data;
        this.registerUserData.name=this.registerData.name.value;
        this.registerUserData.price=this.data.price;
        this.registerUserData.quantity=this.registerData.quantity.value;
        this.registerUserData.imageUrl=this.data.imageUrl;
        this._cart.cart(this.registerUserData)
        .subscribe(
          res => {
            this.snackbar.open('Your product Successfully.', 'Okay!', {
              duration: 4000,
            });
            this.onNoClick()
            // this._router.navigate(['/dashboard'])
          },
         )
      })
    }
  }
}