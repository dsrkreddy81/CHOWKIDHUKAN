import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from '../cart/cart.component';

export interface DialogData {
  imageUrl: string;
  name: string;
  price:number;
}

@Component({
  selector: 'app-oneplus1',
  templateUrl: './oneplus1.component.html',
  styleUrls: ['./oneplus1.component.css']
})
export class Oneplus1Component implements OnInit {

  menu=[
    {name:"OnePlus 6",colsto:"Silk White (8GB RAM+128GB Storage)",imageUrl:"/assets/images/OnePlus/OnePlus 6 Silk White (8GB RAM+128GB Storage).jpg",price:17990,des:"8 GB RAM |128 GB ROM",des1:"15.95 centimeters (6.28-inch) Full HD+ Optic AMOLED display",des2:"20+16 MP Dual rear camera | 16 MP front camera",des3:"3300 mAH Battery"},
  ]
  high=[
{des:"High-Quality Product"},
{des:"Professionally inspected, tested, and cleaned to work like new by the seller, may have a few visible signs of earlier use."},
{des:"Backed by a 6-month Seller Warranty"},
{des:"Seller will repair your product or will provide a replacement or refund within 6 months of your receipt in case the product turns out to be defective within warranty period."}
  ];
  product=[
{des:"𝐎𝐧𝐞𝐩𝐥𝐮𝐬 - The OnePlus One is powered by a Qualcomm Snapdragon 801 processor and 3 GB RAM which allows it to handle performance-heavy applications with ease. With a 13 MP Sony Exmor IMX214 primary camera and LED flash, you'll be able to capture memorable moments with sharp image quality."},
{des:"𝟖𝟎𝟏𝐐𝐮𝐚𝐝 𝐂𝐨𝐫𝐞𝟑 𝐆𝐁 𝐑𝐀𝐌 - 𝐏𝐞𝐫𝐟𝐨𝐫𝐦𝐚𝐧𝐜𝐞 - This smartphone comes with a Qualcomm Snapdragon 801 Quad-Core processor and 3 GB RAM for seamless web browsing, quicker multitasking and smoother gameplay."},
{des:"𝟏𝟑 𝐌𝐏𝟓 𝐌𝐏 - 𝐂𝐚𝐦𝐞𝐫𝐚 - Fitted with a 13 MP Sony Exmor IMX214 camera, the OnePlus One captures photos with clarity, even in low-lit conditions, thanks to a dual LED flash. Snap fun selfies with friends on this phone's 5 MP front camera with an extra-wide 80 degree viewing angle."},
{des:"𝟑𝟏𝟎𝟎 𝐦𝐀𝐡 - 𝐁𝐚𝐭𝐭𝐞𝐫𝐲 - Enjoy all-day productivity on the OnePlus One as the phone comes with a 3100 mAh battery and an energy efficient display. It uses a CABC and DRAM (Display RAM) technology, which results in reduced power consumption, giving you more time to finish your work or complete a level in Candy Crush."},
{des:"𝐂𝐥𝐞𝐚𝐫 𝐀𝐮𝐝𝐢𝐨 - This smartphone uses a tri-microphone noise cancelling technology to identify and enhance your voice so that it's clear against any background noise."},
{des:"𝐎𝐧 𝐒𝐜𝐫𝐞𝐞𝐧 𝐆𝐞𝐬𝐭𝐮𝐫𝐞𝐬 - Launch apps instantly on the OnePlus One with its innovative touchscreen that responds to every touch. Tap twice on the your screen to unlock it or draw an icon to launch an app. Even if your hands are wet, the OnePlus One's screen will respond to your touch."},
{des:"𝐎𝐧 𝐒𝐜𝐫𝐞𝐞𝐧 𝐊𝐞𝐲𝐬 - This smartphone comes with on screen capacitive keys that can be switched off at your convenience."},
{des:"𝐖𝐢𝐅𝐢𝐁𝐥𝐮𝐞𝐭𝐨𝐨𝐭𝐡𝐌𝐢𝐫𝐚𝐜𝐚𝐬𝐭 - 𝐂𝐨𝐧𝐧𝐞𝐜𝐭𝐢𝐯𝐢𝐭𝐲 - Browse the net or cast your screen to a television wirelessly as this phone supports Wi-Fi 2.4/5 GHz 802.11 b/g/n/ac and Miracast. You can also transfer photos or files to other devices using its Bluetooth function, USB connectivity or NFC."},
{des:"𝐒𝐞𝐧𝐬𝐨𝐫𝐬 - 𝐆𝐏𝐒𝐂𝐨𝐦𝐩𝐚𝐬𝐬𝐏𝐫𝐨𝐱𝐢𝐦𝐢𝐭𝐲 𝐒𝐞𝐧𝐬𝐨𝐫- While the OnePlus One's compass and GPS help you stay on track during road trips, the accelerometer helps the phone adapt to changes in orientation. The proximity sensor turns off the screen of the phone while you are on a call and the light sensor adjusts the brightness of the screen, based on external lighting."}
  ]

  constructor(private dialog:MatDialog) { }

  onConfirm(){
    this.dialog.open(CartComponent,{width:'300px',data:{imageUrl:this.menu[0].imageUrl,name:this.menu[0].name,price:this.menu[0].price}})
  }
  ngOnInit(): void {
  }

}
