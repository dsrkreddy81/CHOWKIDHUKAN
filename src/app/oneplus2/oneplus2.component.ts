import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from '../cart/cart.component';

export interface DialogData {
  imageUrl: string;
  name: string;
  price:number;
}

@Component({
  selector: 'app-oneplus2',
  templateUrl: './oneplus2.component.html',
  styleUrls: ['./oneplus2.component.css']
})
export class Oneplus2Component implements OnInit {

  menu=[
    {name:"OnePlus 6T",colsto:"Speed Orange (10GB RAM+256GB Storage)",imageUrl:"/assets/images/OnePlus/OnePlus 6T Speed Orange (10GB RAM+256GB Storage).jpg",price:49999,des:" 12 GB RAM |256 GB ROM",des1:"16.64 cm (6.55 inches) HDR10+ Display",des2:"48 MP + 2 MP + 16 MP Primary Camera | 16 MP Front Camera",des3:"4300 mAh Battery"},
  ]
  high=[
    {des:"20MP+16MP primary dual camera with OIS, Super Slow motion, Portrait mode and 16MP front facing camera"},
    {des:"15.95 centimeters (6.28-inch) FHD+ Full Optic AMOLED 19:9 display with 2280 x 1080 pixels resolution. 2.5D Corning Gorilla Glass 5"},
    {des:"OxygenOS based on Android Oreo 8.1 with Qualcomm Snapdragon 845 octa core processor"},
    {des:"10 GB RAM, 256 GB internal memory and dual nano SIM dual-standby (4G+4G)"},
    {des:"3300mAH lithium Polymer battery with Dash Charge technology"},
    {des:"Face Unlock, Fingerprint scanner, Water Resistant, Glass back and NFC enabled"}
  ];
  product=[

{des:"𝐂𝐚𝐦𝐞𝐫𝐚 - 16+20 MP Dual rear camera with Optical Image Stabilization, Super slow motion, Nightscape and Studio Lighting | 16 MP front camera"},
{des:"𝐃𝐢𝐬𝐩𝐥𝐚𝐲 - 6.41-inch(16.2 cms) Full HD+ Optic AMOLED display with 2340 x 1080 pixels resolution and an 86% screen-to-body ratio"},
{des:"𝐌𝐞𝐦𝐨𝐫𝐲, 𝐒𝐭𝐨𝐫𝐚𝐠𝐞 & 𝐒𝐈𝐌 - 10GB RAM | 256GB storage | Dual nano SIM with dual standby (4G+4G)"},
{des:"𝐒𝐜𝐫𝐞𝐞𝐧 𝐔𝐧𝐥𝐨𝐜𝐤 -  In-screen fingerprint sensor. The OnePlus 6T unlocks in 0.34s for a seamless and intuitive unlock experience"},
{des:"𝐎𝐩𝐞𝐫𝐚𝐭𝐢𝐧𝐠 𝐒𝐲𝐬𝐭𝐞𝐦 𝐚𝐧𝐝 𝐏𝐫𝐨𝐜𝐞𝐬𝐬𝐨𝐫 - OxygenOS based on Android 9.0 Pie with 2.8GHz Qualcomm Snapdragon 845 octa-core processor"},
{des:"𝐁𝐚𝐭𝐭𝐞𝐫𝐲 - 3700 mAh lithium-polymer battery with Fast Charge technology"}
  ]
  
  constructor(private dialog:MatDialog) { }

  onConfirm(){
    this.dialog.open(CartComponent,{width:'300px',data:{imageUrl:this.menu[0].imageUrl,name:this.menu[0].name,price:this.menu[0].price}})
  }
  

  ngOnInit(): void {
  }

}
