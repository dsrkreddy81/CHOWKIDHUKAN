import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order-confirm',
  templateUrl: './order-confirm.component.html',
  styleUrls: ['./order-confirm.component.css']
})
export class OrderConfirmComponent implements OnInit {

  orderdata=[]
  displayedColumns: string[] = ['imageUrl','name','quantity','price','date','deliverdate'];
  length;
  constructor(
    public _authService: AuthService,
    private order: OrderService,
    private snackbar:MatSnackBar,
    private dialog:MatDialog
  ) { }

  
  ngOnInit(): void {
    if(this._authService.loggedIn()){
      this._authService.getUserId().subscribe(
        (res)=>{
          this.order.getorder(res).subscribe(
            (data:any[])=>{
              this.orderdata=data
              this.length=this.orderdata.length;
            });
        });
    }
    else{
      this.snackbar.open('PLEASE LOGIN','OK',{
        duration: 3000,
      });
    }
  }

}
