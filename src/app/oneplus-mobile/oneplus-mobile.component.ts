import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oneplus-mobile',
  templateUrl: './oneplus-mobile.component.html',
  styleUrls: ['./oneplus-mobile.component.css']
})
export class OneplusMobileComponent implements OnInit {

  menu=[
    {name:"OnePlus 6",colsto:"Silk White (8GB RAM+128GB Storage)",imageUrl:"/assets/images/OnePlus/OnePlus 6 Silk White (8GB RAM+128GB Storage).jpg",price:17990,oneplusroute:"/oneplus1",des:"●8 GB RAM |128 GB ROM",des1:"●15.95 centimeters (6.28-inch) Full HD+ Optic AMOLED display",des2:"●20+16 MP Dual rear camera | 16 MP front camera",des3:"●3300 mAH Battery"},
    {name:"OnePlus 6T",colsto:"Speed Orange (10GB RAM+256GB Storage)",imageUrl:"/assets/images/OnePlus/OnePlus 6T Speed Orange (10GB RAM+256GB Storage).jpg",price:49999,oneplusroute:"/oneplus2",des:"● 12 GB RAM |256 GB ROM",des1:"●16.64 cm (6.55 inches) HDR10+ Display",des2:"●48 MP + 2 MP + 16 MP Primary Camera | 16 MP Front Camera",des3:"●4300 mAh Battery"},
    {name:"OnePlus 7T",colsto:"Glacier Blue (8GB RAM+256GB Storage)",imageUrl:"/assets/images/OnePlus/OnePlus 7T Glacier Blue (8GB RAM+256GB Storage).webp",price:37999,oneplusroute:"/oneplus3",des:"● 8 GB RAM and 256 GB ROM",des1:"●16.94 cm (6.67 inch) Fluid AMOLED Display",des2:"●16 MP Front Camera and 48 MP + 16 MP + 8 MP Primary Camera",des3:"●4085 mAh Battery"},
    {name:"OnePlus 8",colsto:"Glacial Green (6GB RAM+128GB Storage)",imageUrl:"/assets/images/OnePlus/OnePlus 8 Glacial Green (6GB RAM+128GB Storage).webp",price:43999,oneplusroute:"/oneplus4", des:"● 8 GB RAM |128 GB ROM",des1:"●16.64 cm (6.55 inches) HDR10+ Display",des2:"●48 MP + 2 MP + 16 MP Primary Camera | 16 MP Front Camera",des3:"●4300 mAh Battery"},
    {name:"OnePlus 7T Pro",colsto:"Haze Blue (8GB RAM+256GB Storage)",imageUrl:"/assets/images/OnePlus/OnePlus 7T Pro Haze Blue (8GB RAM+256GB Storage).webp",price:39999,oneplusroute:"/oneplus5",des:"●  8 GB RAM and 256 GB ROM",des1:"●16.94 cm (6.67 inch) Fluid AMOLED Display",des2:"●16 MP Front Camera and 48 MP + 16 MP + 8 MP Primary Camera",des3:"●4085 mAh Battery"},
    {name:"OnePlus 8 Pro",colsto:"Onyx Black (12GB RAM+256GB Storage)",imageUrl:"/assets/images/OnePlus/OnePlus 8 Pro Onyx Black (12GB RAM+256GB Storage).webp",price:59999,oneplusroute:"/oneplus6",des:"● 12 GB RAM |256 GB ROM",des1:"●16.64 cm (6.55 inches) HDR10+ Display",des2:"●48 MP + 2 MP + 16 MP Primary Camera | 16 MP Front Camera",des3:"●4300 mAh Battery"},
    {name:"OnePlus 8T Pro 5G",colsto:"Aquamarine Green (12GB RAM+256GB Storage)",imageUrl:"/assets/images/OnePlus/OnePlus 8T 5G Aquamarine Green (12GB RAM+256GB Storage).webp",price:45999,oneplusroute:"/oneplus7",des:"● 12 GB RAM | 256 GB ROM",des1:"●16.64 cm (6.55 inch) 120 Hz Fluid AMOLED Display",des2:"●48 MP + 16 MP + 5 MP + 2 MP Primary Camera | 16 MP Front Camera",des3:"●4500 mAh Battery"},
    {name:"OnePlus Nord 5G",colsto:"Gray Onyx (8GB RAM+256GB Storage)",imageUrl:"/assets/images/OnePlus/OnePlus Nord 5G Gray Onyx (8GB RAM+256GB Storage).webp",price:27999,oneplusroute:"/oneplus8",des:"● 8 GB RAM | 128 GB ROM",des1:"●16.36 cm (6.44 inch) Full HD+ Display",des2:"●48MP + 8MP | 32MP + 8MP Dual Front Camera",des3:"●4115 mAh Battery",des4:"●Qualcomm® Snapdragon™ 765G Processor"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
