import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from '../cart/cart.component';

export interface DialogData {
  imageUrl: string;
  name: string;
  price:number;
}

@Component({
  selector: 'app-apple2',
  templateUrl: './apple2.component.html',
  styleUrls: ['./apple2.component.css']
})
export class Apple2Component implements OnInit {

  menu=[
    {name:"Apple iPhone 11 Pro Max",colsto:"Midnight Green (64GB Storage)",imageUrl:"/assets/images/Apple/Apple iPhone 11 Pro Max Midnight Green (64GB Storage).webp",price:106729}
  ]
  content=[
    {des:"6.5-inch (16.5 cm) Super Retina XDR OLED display"},
    {des:"Water and dust resistant (4 meters for up to 30 minutes, IP68)"},
    {des:"Triple-camera system with 12MP Ultra Wide, Wide, and Telephoto cameras; Night mode, Portrait mode, and 4K video up to 60fps"},
    {des:"12MP TrueDepth front camera with Portrait Mode, 4K video, and Slo-Mo"},
    {des:"Face ID for secure authentication and Apple Pay"},
    {des:"A13 Bionic chip with third-generation Neural Engine"},
    {des:"Fast charge with 18W adapter included"},
    {des:"Wireless charging"},
    {des:"iOS13 with Dark Mode, new tools for editing photos and video, and brand new privacy features"}
  ]

  constructor(private dialog:MatDialog) { }

  onConfirm(){
    this.dialog.open(CartComponent,{width:'300px',data:{imageUrl:this.menu[0].imageUrl,name:this.menu[0].name,price:this.menu[0].price}})
  }

  ngOnInit(): void {
  }

}
