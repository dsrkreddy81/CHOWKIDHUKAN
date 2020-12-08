import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';

export interface PeriodicElement {
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-cart-confirm',
  templateUrl: './cart-confirm.component.html',
  styleUrls: ['./cart-confirm.component.css']
})
export class CartConfirmComponent implements OnInit {

  cartdata=[]
  displayedColumns: string[] = ['imageUrl','name','quantity','price'];
  registerUserData={userid:null,name:"",imageUrl:"",quantity:"",price:""}

  constructor(
    public _authService: AuthService,
    private cart: CartService,
    private snackbar:MatSnackBar,
    private dialog:MatDialog,
    private router:Router
  ) { }

  deleteall(){
    this.cart.clearCart(this.cartdata)
          .subscribe(()=>{

          },
          err=>{
            if( err instanceof HttpErrorResponse ) {
              if (err.status === 200) {
                this.snackbar.open('Removed all Successfully!!!','Ok',{
duration:3000});
              }
              this.ngOnInit();
              
            }
          })
  }

  getTotalCost() {
    let total:number=0;
    this.cartdata.forEach(x=>{
      total=total+(x.quantity*x.price);
    })
    return total;
  }

  getQuantity(){
    let total:number=0;
    this.cartdata.forEach(x=>{
      total=total+x.quantity*1;
    })
    return total;
  }

  ngOnInit(): void {
    if(this._authService.getToken()){
      this._authService.getUserId().subscribe((data)=>{
        this.cart.getcart(data)

          .subscribe(
            (res:any) => {
              this.cartdata=res
              console.log(res);
        });
      })
    }
  }

  onCheckout(){
    this.cart.checkOut(this.cartdata)
    .subscribe(()=>{
      
    },
    err=>{
      if(err instanceof HttpErrorResponse){
        if(err.status===200){
          this.cart.clearCart(this.cartdata)
          .subscribe(()=>{

          },
          err=>{
            if( err instanceof HttpErrorResponse ) {
              if (err.status === 200) {
                this.snackbar.open('ORDER PLACED SUCCESSFULLY!!','OK',{
                  duration: 3000,
                });
              }
              this.ngOnInit();
              // this.router.navigate(['/thankyou'])
            }
          })
        }
      }
    })
  }

}
