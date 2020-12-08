import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from '../cart/cart.component';

export interface DialogData {
  imageUrl: string;
  name: string;
  price:number;
}

@Component({
  selector: 'app-samsung6',
  templateUrl: './samsung6.component.html',
  styleUrls: ['./samsung6.component.css']
})
export class Samsung6Component implements OnInit {

  menu=[
    {name:"Samsung Galaxy M51",colsto:"Electric Blue (6GB RAM+128GB Storage)",imageUrl:"/assets/images/Samsung/Samsung Galaxy M51 Electric Blue (6GB RAM+128GB Storage).webp",price:16499}
  ]
  high=[
    {des:"6 GB RAM | 128 GB ROM"},
    {des:"17.02 cm (6.7 inch) Display"},
    {des:"64MP Rear Camera"},
    {des:"7000 mAh Battery"}
  ];
  product=[
{des:"Quad camera setup - 64MP (F1.8) main camera + 12MP (F2.2) ultra wide camera + 5MP (F2.4) depth camera + 5MP (F2.4) macro camera and 32MP (F2.2) front camera"},
{des:"16.95 cm (6.7-inch) sAMOLED Plus - Infinity-O display, FHD+ capacitive touchscreen with 1080 x 2400 pixels resolution, Contrast Ratio: 78960:1"},
{des:"Memory, Storage & SIM: 6GB RAM, 128GB internal memory expandable up to 512GB | Dedicated Memory slot"},
{des:"Android v10.0 operating system with 2.2GHz+1.8GHz Qualcomm | SD730G octa core processor"},
{des:"7000mAH lithium-ion battery | 25W USB Type-C to C fast charger in the box"},
{des:"Fast face unlock and Side Fingerprint sensor | Dual SIM (nano+nano) with dual standby and dual VoLTE | 3.5 mm headphone jack"},
{des:"The symmetric Infinity-O display introduces un-interrupted visual experience for gaming, watching videos, multi-tasking, browsing and more with Versatile Quad Camera. Its Ultra wide camera captures scenes with 123˚ angle of view whilst the Depth camera brings beautiful portraits with Live Focus Effects."},
{des:"1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase	1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase	1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase	1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase"}
  ]

  constructor(private dialog:MatDialog) { }

  onConfirm(){
    this.dialog.open(CartComponent,{width:'300px',data:{imageUrl:this.menu[0].imageUrl,name:this.menu[0].name,price:this.menu[0].price}})
  }


  ngOnInit(): void {
  }

}
