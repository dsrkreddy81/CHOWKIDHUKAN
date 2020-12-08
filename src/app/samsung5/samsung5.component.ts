import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from '../cart/cart.component';

export interface DialogData {
  imageUrl: string;
  name: string;
  price:number;
}

@Component({
  selector: 'app-samsung5',
  templateUrl: './samsung5.component.html',
  styleUrls: ['./samsung5.component.css']
})
export class Samsung5Component implements OnInit {

  menu=[
    {name:"Samsung Galaxy M31s",colsto:"Mirage Blue (6GB RAM+128GB Storage)",imageUrl:"/assets/images/Samsung/Samsung Galaxy M31s Mirage Blue (6GB RAM+128GB Storage).webp",price:19499}
    ]
  high=[
    {des:"6 GB RAM | 128 GB ROM"},
    {des:"16.51 cm (6.5 inch) Display"},
    {des:"64MP Rear Camera"},
    {des:"6000 mAh Battery"}
  ];
  product=[
{des:"Quad camera setup - 64MP (F1.8) main camera + 12MP (F2.2) ultra wide camera + 5MP (F2.4) depth camera + 5MP (F2.4) macro camera | 32MP (F2.2) front camera"},
{des:"16.4 centimeters (6.5-inch) super Amoled - Infinity-O display, FHD+ capacitive multi-touch touchscreen with 1080 x 2400 pixels resolution, 407 ppi pixel density and Contrast Ratio: 78960:1"},
{des:"Memory, Storage & SIM: 6GB RAM, 128GB internal memory expandable up to 512GB | Dual SIM (nano+nano) dual-standby (4G+4G)"},
{des:"Android v10.0 operating system with 1.7GHz+2.3GHz Exynos 9611 octa core processor"},
{des:"6000mAH lithium-ion battery with 5x fast charge | 25W Type-C fast charger in the box"},
{des:"Fast face unlock and fingerprint sensor | Dual SIM (nano+nano) with dual standby and dual VoLTE, Dedicated Sim slot"},
{des:"Box also includes: Travel adapter, USB Type-C to Type-C Cable, ejection pin and user manual"},
{des:"1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase	1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase	1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase	1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase   "}
  ]

  constructor(private dialog:MatDialog) { }

  onConfirm(){
    this.dialog.open(CartComponent,{width:'300px',data:{imageUrl:this.menu[0].imageUrl,name:this.menu[0].name,price:this.menu[0].price}})
  }


  ngOnInit(): void {
  }

}
