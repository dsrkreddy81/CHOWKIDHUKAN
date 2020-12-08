import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from '../cart/cart.component';

export interface DialogData {
  imageUrl: string;
  name: string;
  price:number;
}

@Component({
  selector: 'app-apple7',
  templateUrl: './apple7.component.html',
  styleUrls: ['./apple7.component.css']
})
export class Apple7Component implements OnInit {

  menu=[
    {name:"Apple iPhone X",colsto:"Space Grey (256GB Storage).webp",imageUrl:"/assets/images/Apple/Apple iPhone X Space Grey (256GB Storage).webp",price:74990}
  ]
  high=[
    {des:"256 GB ROM"},
    {des:"14.73 cm (5.8 inch) Super Retina HD Display"},
    {des:"12MP + 12MP | 7MP Front Camera"},
    {des:"A11 Bionic Chip with 64-bit Architecture, Neural Engine"}, 
    {des:"Embedded M11 Motion Coprocessor Processor"}
  ];
  product=[
    {des:"𝐌𝐞𝐞𝐭 𝐭𝐡𝐞 𝐢𝐏𝐡𝐨𝐧𝐞 𝐗 - the device that's so smart that it responds to a tap, your voice, and even a glance. Elegantly designed with a large 14.73 cm (5.8) Super Retina screen and a durable front-and-back glass, this smartphone is designed to impress. What's more, you can charge this iPhone wirelessly."},
    {des:"𝟏𝟒.𝟕𝟑 𝐜𝐦 𝐒𝐮𝐩𝐞𝐫 𝐑𝐞𝐭𝐢𝐧𝐚 𝐒𝐜𝐫𝐞𝐞𝐧 - Movies or games - with its Super Retina screen, you can enjoy an immersive-viewing experience that dazzles the eyes."},
    {des:"𝐈𝐧𝐧𝐨𝐯𝐚𝐭𝐢𝐯𝐞 𝐃𝐢𝐬𝐩𝐥𝐚𝐲 𝐓𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲 - The display, with new techniques and technology, follows the curves and its elegantly rounded corners."},
    {des:"𝐎𝐋𝐄𝐃 𝐒𝐜𝐫𝐞𝐞𝐧 - Everything on the screen looks vibrant and beautiful, with true blacks, stunning colors, high brightness, and a 1,000,000 to 1 contrast ratio."},
    {des:"𝐈𝐏𝟔𝟕 𝐑𝐚𝐭𝐢𝐧𝐠 - Crafted using durable glass on both the sides, this phone, with surgical-grade stainless steel, is water- and dust-resistant."},
    {des:"𝐈𝐧𝐭𝐮𝐢𝐭𝐢𝐯𝐞 𝐆𝐞𝐬𝐭𝐮𝐫𝐞𝐬 - Navigating your phone using familiar gestures will be intuitive and natural. All it takes is a simple swipe to take you to your home screen from anywhere."},
    {des:"𝐘𝐨𝐮𝐫 𝐅𝐚𝐜𝐞 𝐢𝐬 𝐘𝐨𝐮𝐫 𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝 - Experience secure authentication with its Face ID; it projects and analyses more than 30,000 invisible dots on your face to create a depth map. What's more, enabled by the TrueDepth camera and equipped with an adaptive recognition, the Face ID adapts to your face's physical changes over time."},
    {des:"𝐏𝐨𝐫𝐭𝐫𝐚𝐢𝐭 𝐌𝐨𝐝𝐞 𝐒𝐞𝐥𝐟𝐢𝐞𝐬 𝐚𝐧𝐝 𝐏𝐨𝐫𝐭𝐫𝐚𝐢𝐭 𝐋𝐢𝐠𝐡𝐭𝐢𝐧𝐠 - Click beautiful selfies with sharp foregrounds, blurred backgrounds and impressive studio-quality lighting effects."},
    {des:"𝐄𝐱𝐩𝐫𝐞𝐬𝐬 𝐘𝐨𝐮𝐫𝐬𝐞𝐥𝐟 𝐰𝐢𝐭𝐡 𝟏𝟐 𝐀𝐧𝐢𝐦𝐨𝐣𝐢 - Thanks to the TrueDepth camera, this phone analyses more than 50 muscle movements to mirror your expressions."},
    {des:"𝐃𝐮𝐚𝐥 𝟏𝟐 𝐌𝐏 𝐂𝐚𝐦𝐞𝐫𝐚𝐬 - Its dual cameras feature a large and fast 12 MP sensor, an optical zoom, a color filter and a telephoto camera with OIS, so your pictures and videos come out bright and precise even in low-light conditions."},
    {des:"𝐒𝐭𝐮𝐝𝐢𝐨-𝐪𝐮𝐚𝐥𝐢𝐭𝐲 𝐋𝐢𝐠𝐡𝐭𝐢𝐧𝐠 - Thanks to its Portrait Lighting, depth-sensing cameras and precise facial mapping, you can click professional-quality photos."},
    {des:"𝐒𝐮𝐩𝐞𝐫𝐡𝐮𝐦𝐚𝐧 𝐈𝐧𝐭𝐞𝐥𝐥𝐢𝐠𝐞𝐧𝐜𝐞 - Equipped with the A11 Bionic chip designed by Apple that boasts four efficiency cores and a neural engine, you can experience fast performance and smooth multitasking."},
    {des:"𝐋𝐨𝐧𝐠-𝐥𝐚𝐬𝐭𝐢𝐧𝐠 𝐁𝐚𝐭𝐭𝐞𝐫𝐲 - Its second-generation performance controller along with its custom battery design makes this phone's battery last long between charges."},
    {des:"𝐆𝐚𝐦𝐞 𝐋𝐢𝐤𝐞 𝐍𝐞𝐯𝐞𝐫 𝐁𝐞𝐟𝐨𝐫𝐞 - Thanks to its Apple-designed three-core GPU and powerful A11 Bionic chip, you can enjoy unbelievable augmented reality experiences in apps and games."},
    {des:"𝐖𝐢𝐫𝐞𝐥𝐞𝐬𝐬 𝐂𝐡𝐚𝐫𝐠𝐢𝐧𝐠 - No more cables and wires - charge it wirelessly using charging stations and mats."},
    {des:"𝗶𝗢𝗦 𝟭𝟭 - Send Animoji in Messages, discover new music with friends on Apple Music and let Siri be your personal DJ."}
  ]

  constructor(private dialog:MatDialog) { }

  onConfirm(){
    this.dialog.open(CartComponent,{width:'300px',data:{imageUrl:this.menu[0].imageUrl,name:this.menu[0].name,price:this.menu[0].price}})
  }

  ngOnInit(): void {
  }

}
