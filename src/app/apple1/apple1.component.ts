import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from '../cart/cart.component';

export interface DialogData {
  imageUrl: string;
  name: string;
  price:number;
}

@Component({
  selector: 'app-apple1',
  templateUrl: './apple1.component.html',
  styleUrls: ['./apple1.component.css']
})
export class Apple1Component implements OnInit {

  menu=[
    {imageUrl:"/assets/images/Apple/Apple iPhone 11 Black (128GB Storage).webp",name:"Apple iPhone 11",colsto:"Black (128GB Storage)",price:59900,des:"128 GB ROM",des1:"15.49 cm (6.1 inch) Liquid Retina HD Display",des2:"12MP + 12MP | 12MP Front Camera",des3:"A13 Bionic Chip Processor"},
  ];

  content=[
    {des:"6.1-inch (15.5 cm) Liquid Retina HD LCD display"},
    {des:"Water and dust resistant (2 meters for up to 30 minutes, IP68)"},
    {des:"Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps"},
    {des:"12MP TrueDepth front camera with Portrait mode, 4K video, and Slo-Mo"},
    {des:"Face ID for secure authentication"},
    {des:"A13 Bionic chip with third-generation Neural Engine"},
    {des:"Fast-charge capable"},
    {des:"Wireless charging"},
    {des:"As part of our efforts to reach our environmental goals, iPhone no longer includes a power adapter or EarPods. Please use your existing Apple power adapter and headphones or buy these accessories separately iOS 14 with redesigned widgets on the Home screen, all-new App Library, App Clips, and more"}
  ]

  

  constructor(private dialog:MatDialog) { }

  onConfirm(){
    this.dialog.open(CartComponent,{width:'400px',data:{imageUrl:this.menu[0].imageUrl,name:this.menu[0].name,price:this.menu[0].price}})
  }

  ngOnInit(): void {
  }

}
