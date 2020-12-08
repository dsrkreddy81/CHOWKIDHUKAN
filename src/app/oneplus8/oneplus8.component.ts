import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from '../cart/cart.component';

export interface DialogData {
  imageUrl: string;
  name: string;
  price:number;
}

@Component({
  selector: 'app-oneplus8',
  templateUrl: './oneplus8.component.html',
  styleUrls: ['./oneplus8.component.css']
})
export class Oneplus8Component implements OnInit {

  menu=[
    {name:"OnePlus Nord 5G",colsto:"Gray Onyx (8GB RAM+256GB Storage)",imageUrl:"/assets/images/OnePlus/OnePlus Nord 5G Gray Onyx (8GB RAM+256GB Storage).webp",price:27999,des:" 8 GB RAM | 128 GB ROM",des1:"16.36 cm (6.44 inch) Full HD+ Display",des2:"48MP + 8MP | 32MP + 8MP Dual Front Camera",des3:"4115 mAh Battery",des4:"Qualcomm® Snapdragon™ 765G Processor"},
  ]
  high=[
{des:"6.44 inches Fluid AMOLED capacitive touchscreen"},
{des:"Android 10, OxygenOS 10.0"},
{des:"Qualcomm SDM765 Snapdragon 765G (7 nm)"},
{des:"Octa-core (1x2.4 GHz Kryo 475 Prime & 1x2.2 GHz Kryo 475 Gold & 6x1.8 GHz Kryo 475 Silver)"},
{des:"64GB 6GB RAM, 128GB 8GB RAM, 256GB 12GB RAM"},
{des:"Quad Camera 48MP+8MP+5MP+2MP Selfie 32MP+8MP"},
{des:"Non-removable Li-Po 4115 mAh battery"}
  ];
  product:[
{des:"Camera - Rear Camera Lens 1 - 48|48|16 megapixels|48 - Rear Camera Lens 2 - Main Camera: Dual LED Flash, Multi Autofocus ( PDAF+CAF) | Front Camera: Fixed Focus, Time Lapse, 1080 video @30 fps	Main Camera: Dual LED Flash, Multi Autofocus ( PDAF+CAF) | Front Camera: Fixed Focus, Time Lapse, 1080 video @30 fps	16MP+12MP+12MP	48MP+2MP+16MP"},
{des:"Screen - 6.55 in	6.55 in	6.4 in	6.55 in Screen Type - Indicates the kind of technology used by the display to light-up the screen"},
{des:"AMOLED	AMOLED	AMOLED	AMOLED"},
{des:"Battery - 4500 mAH - Type of battery technology and material of the built-in battery - Lithium Polymer	Lithium Polymer	Lithium Ion	Lithium Ion"},
{des:"RAM determines how smooth is the switching between apps & the overall speed of operation. Higher the better."},
{des:"Processor - Qualcomm Snapdragon 865	Qualcomm Snapdragon 865	Exynos 9820	Qualcomm Snapdragon 865"},
{des:"Processor Speed - Denotes the maximum speed at which the processor cores are capable of operating.Higher the better"},
{des:"256;Dual SIM;GPS;Music Player;Video Player;;In-display Fingerprint sensor;Accelerometer;Electronic Compass;Gyroscope;Ambient Light sensor;Proximity sensor;sensor Core;Flicker-detect sensor;E-mail; dual sim; 256; GPS; Music Player; Video Player; In-display Fingerprint sensor; Accelerometer; Electronic Compass; Gyroscope; Ambient Light sensor; Proximity sensor; sensor Core; Flicker-detect sensor; E-mail	dual sim; 256;GPS;Music Player;Video Player;;In-display Fingerprint sensor;Accelerometer;Electronic Compass;Gyroscope;Ambient Light sensor;Proximity sensor;sensor Core;Flicker-detect sensor;E-mail	Dual SIM; GPS; Accelerometer; Barometer; Fingerprint sensor; Gyro sensor; Geomagnetic sensor; Hall sensor; RGB Light sensor; Proximity sensor	serial_number; Dual SIM; GPS; In-display fingerprint sensor; Accelerometer; Electronic compass; Gyroscope; Ambient light sensor; Proximity sensor; Sensor core; E-mail"},
{des:"Item Dimensions - 0.80 x 7.40 x 16.10 cm"}
  ]

  constructor(private dialog:MatDialog) { }

  onConfirm(){
    this.dialog.open(CartComponent,{width:'300px',data:{imageUrl:this.menu[0].imageUrl,name:this.menu[0].name,price:this.menu[0].price}})
  }

  ngOnInit(): void {
  }

}
