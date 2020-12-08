import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from '../cart/cart.component';

export interface DialogData {
  imageUrl: string;
  name: string;
  price:number;
}

@Component({
  selector: 'app-apple5',
  templateUrl: './apple5.component.html',
  styleUrls: ['./apple5.component.css']
})
export class Apple5Component implements OnInit {

  menu=[
    {name:"Apple iPhone 12 Pro Max",colsto:"Pacific Blue (256GB Storage)",imageUrl:"/assets/images/Apple/Apple iPhone 12 Pro Max Pacific Blue (256GB Storage).jpeg",price:139900}
  ]
  content=[
    {des:"6.7-inch Super Retina XDR display"},
    {des:"Ceramic Shield, tougher than any smartphone glass"},
    {des:"A14 Bionic chip, the fastest chip ever in a smartphone"},
    {des:"Pro camera system with 12MP Ultra Wide, Wide and Telephoto cameras; 5x optical zoom range; Night mode, Deep Fusion, Smart HDR 3, Apple ProRAW, 4K Dolby Vision HDR recording"},
    {des:"LiDAR Scanner for improved AR experiences, Night mode portraits"},
    {des:"12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording"},
    {des:"Industry-leading IP68 water resistance"},
    {des:"Supports MagSafe accessories for easy attach and faster wireless charging"},
    {des:"iOS with redesigned widgets on the Home screen, all-new App Library, App Clips and more"}
  ]

  constructor(private dialog:MatDialog) { }

  onConfirm(){
    this.dialog.open(CartComponent,{width:'300px',data:{imageUrl:this.menu[0].imageUrl,name:this.menu[0].name,price:this.menu[0].price}})
  }

  ngOnInit(): void {
  }

}
