import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from '../cart/cart.component';

export interface DialogData {
  imageUrl: string;
  name: string;
  price:number;
}

@Component({
  selector: 'app-apple4',
  templateUrl: './apple4.component.html',
  styleUrls: ['./apple4.component.css']
})
export class Apple4Component implements OnInit {

  menu=[
    {name:"Apple iPhone 12 Mini",colsto:"Black (64GB Storage)",imageUrl:"/assets/images/Apple/Apple iPhone 12 Mini Black (64GB Storage).jpeg",price:69900}
  ]
  content=[
    {des:"5.4-inch Super Retina XDR display"},
    {des:"Ceramic Shield, tougher than any smartphone glass"},
    {des:"A14 Bionic chip, the fastest chip ever in a smartphone"},
    {des:"Advanced dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Deep Fusion, Smart HDR 3, 4K Dolby Vision HDR recording"},
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
