import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from '../cart/cart.component';

export interface DialogData {
  imageUrl: string;
  name: string;
  price:number;
}

@Component({
  selector: 'app-apple8',
  templateUrl: './apple8.component.html',
  styleUrls: ['./apple8.component.css']
})
export class Apple8Component implements OnInit {

  menu=[
    {name:"Apple iPhone XR",colsto:"White (64GB Storage)",imageUrl:"/assets/images/Apple/Apple iPhone XR White (64GB Storage).jpeg",price:44900}
  ]
  high=[
    {des:"64 GB ROM"},
    {des:"15.49 cm (6.1 inch) Display"},
    {des:"12MP Rear Camera | 7MP Front Camera"},
    {des:"A12 Bionic Chip Processor"},
    {des:"iOS 13 Compatible"}
  ];
  product=[
    {des:"𝐌𝐞𝐞𝐭 𝐭𝐡𝐞 𝐢𝐏𝐡𝐨𝐧𝐞 𝐗𝐑 - The iPhone XR has arrived to stun our senses with a host of features such as the Liquid Retina Display, a faster Face ID, and the powerful A12 Bionic Chip. Whether it's that picture-perfect portrait shot or a jaw-dropping HDR picture, the cameras of this iPhone too will continue to stun you with their brilliance. Thus, when you have the iPhone XR in your hands, you can only see beauty, in every way."},
    {des:"𝐋𝐢𝐪𝐮𝐢𝐝 𝐑𝐞𝐭𝐢𝐧𝐚 𝐃𝐢𝐬𝐩𝐥𝐚𝐲 - 𝐁𝐞𝐚𝐮𝐭𝐲 𝐀𝐰𝐚𝐢𝐭𝐬 𝐘𝐨𝐮𝐫 𝐄𝐲𝐞𝐬 - What does the display of the iPhone XR smartphone have in store for you? Its advanced 15.49 cm (6.1) Liquid Retina Display along with an innovative backlight, allows the screen to stretch to the corners, thereby exposing you to colorful visuals from one edge to another. It also packs the punch of enhanced color accuracy and a wide color gamut for delightful visuals."},
    {des:"𝐄𝐱𝐜𝐞𝐩𝐭𝐢𝐨𝐧𝐚𝐥 𝐃𝐞𝐬𝐢𝐠𝐧 - 𝐅𝐞𝐞𝐥 𝐈𝐭 𝐭𝐨 𝐁𝐞𝐥𝐢𝐞𝐯𝐞 - Get set to be stunned by this phone's design, as it comprises one of the most durable front glass. A special Apple-designed alloy has been utilized to make the structural bands, so as to complement the look of the back glass."},
    {des:"𝐀𝐝𝐯𝐚𝐧𝐜𝐞𝐝 𝐅𝐚𝐜𝐞 𝐈𝐃 - 𝐘𝐨𝐮𝐫 𝐅𝐢𝐥𝐞𝐬 𝐖𝐢𝐥𝐥 𝐁𝐞 𝐉𝐮𝐬𝐭 𝐘𝐨𝐮𝐫𝐬 - You can unlock your phone and log in to various applications with just a glance, thanks to this phone's advanced and fast Face ID Technology."},
    {des:"𝐓𝐡𝐞 𝐀𝟏𝟐 𝐁𝐢𝐨𝐧𝐢𝐜 𝐂𝐡𝐢𝐩 - 𝐓𝐡𝐞 𝐒𝐦𝐚𝐫𝐭 𝐁𝐢𝐭𝐞 - From incredible portraits with depth control to augmented reality experiences, the A12 Bionic chip will make your smartphone experience, truly delightful."},
    {des:"𝐂𝐚𝐦𝐞𝐫𝐚 𝐒𝐲𝐬𝐭𝐞𝐦 - 𝐀 𝐍𝐞𝐰 𝐄𝐫𝐚 𝐨𝐟 𝐏𝐡𝐨𝐭𝐨𝐠𝐫𝐚𝐩𝐡𝐲 - The iPhone camera has always been the center of all attention, and with the iPhone XR, the stunning cameras (12 MP Rear Camera, 7 MP Front Camera) are accompanied by an innovative sensor and Neural Engine to capture memories like never before."},
    {des:"𝐏𝐨𝐫𝐭𝐫𝐚𝐢𝐭 𝐌𝐨𝐝𝐞 - 𝐀𝐥𝐥 𝐀𝐭𝐭𝐞𝐧𝐭𝐢𝐨𝐧 𝐈𝐬 𝐨𝐧 𝐘𝐨𝐮 - With a single-lens camera and machine learning technology, your pictures will be captured with you being in focus. The Bokeh Effect adds a sophisticated background blur to your image. What's more? You can also adjust the depth of field on your portrait images after you have shot them."},
    {des:"𝐒𝐦𝐚𝐫𝐭 𝐇𝐃𝐑 - 𝐀 𝐏𝐢𝐜𝐭𝐮𝐫𝐞 𝐰𝐢𝐭𝐡 𝐆𝐨𝐨𝐝 𝐇𝐢𝐠𝐡𝐥𝐢𝐠𝐡𝐭 - With the presence of new secondary frames, faster sensors, and the powerful A12 Bionic chip, your HDR images, taken from the rear camera, will be enhanced with more highlight and shadow."},
    {des:"𝐓𝐫𝐮𝐞𝐃𝐞𝐩𝐭𝐡 𝐂𝐚𝐦𝐞𝐫𝐚 - 𝐑𝐞𝐚𝐝𝐲, 𝐏𝐨𝐬𝐞, 𝐂𝐥𝐢𝐜𝐤 - With the presence of a Wide-angle Lens (f/2.2) and a Portrait Mode with Depth Control, the 7 MP Front Camera offers the perfect canvas for capturing moments."},
    {des:"𝐎𝐭𝐡𝐞𝐫 𝐅𝐞𝐚𝐭𝐮𝐫𝐞𝐬 - 𝐓𝐡𝐞𝐫𝐞'𝐬 𝐌𝐨𝐫𝐞 𝐭𝐨 𝐖𝐡𝐚𝐭 𝐘𝐨𝐮 𝐂𝐚𝐧 𝐒𝐞𝐞 - This iPhone comes with an internal memory of 64 GB. Its built-in rechargeable lithium-ion battery paves the way for a seamless battery performance."}
  ]

  constructor(private dialog:MatDialog) { }

  onConfirm(){
    this.dialog.open(CartComponent,{width:'300px',data:{imageUrl:this.menu[0].imageUrl,name:this.menu[0].name,price:this.menu[0].price}})
  }

  ngOnInit(): void {
  }

}
