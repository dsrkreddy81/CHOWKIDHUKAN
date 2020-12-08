import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-samsung-mobile',
  templateUrl: './samsung-mobile.component.html',
  styleUrls: ['./samsung-mobile.component.css']
})
export class SamsungMobileComponent implements OnInit {

  menu=[
    {name:"Samsung Galaxy A51",colsto:"Blue (6GB RAM+128GB Storage)",imageUrl:"/assets/images/Samsung/Samsung Galaxy A51 Blue (6GB RAM+128GB Storage).jpg",price:22999,samsungroute:"/samsung1",des:"●6 GB RAM and 128 GB ROM (Expandable up to 512 GB)",des1:"●16.4 cm (6.5 inch) 2400 x 1080 pixels Super Amoled Infinity-O Display with capacitive touchscreen and FHD+ resolution",des2:"●48MP (F1.8) Main Camera + 12MP (F2.2) Ultra Wide Camera + 5MP(F2.2) Depth Camera + 5MP(F2.4) Macro and 32MP (F2.0) front facing Punch Hole Camera",des3:"●4000mAH lithium-ion Battery"},
    {name:"Samsung Galaxy M21",colsto:"Midnight Blue (4GB RAM+64GB Storage)",imageUrl:"/assets/images/Samsung/Samsung Galaxy M21 Midnight Blue (4GB RAM+64GB Storage).webp",price:13999,samsungroute:"/samsung2",des:"●16.26 cm (6.4 inch) Super Amoled 2340 x 1080 FHD+ Infinity U display",des1:"●48 MP, 8 MP, 5 MP Triple Primary Camera",des2:"●20 MP Selfie Camera, Dolby Atmos Speaker",des3:"●Android 10 and One UI 2.0 Operating System"},
    {name:"Samsung Galaxy M31",colsto:"Ocean Blue (6GB RAM+128GB Storage)",imageUrl:"/assets/images/Samsung/Samsung Galaxy M31 Ocean Blue (6GB RAM+128GB Storage).webp",price:15999,samsungroute:"/samsung3",des:"●Immersive viewing with 16.26 cm (6.4 inch) Infinity-U Display",des1:"●2.3 GHz, 1.7 GHz Exynos 9611 Octa-Core Processor",des2:"●Android 10 and One UI 2.0 Operating System",des3:"●64 MP + 8 MP + 5 MP + 5 MP Primary Camera"},
    {name:"Samsung Galaxy M31 Prime",colsto:"Ocean Blue (6GB RAM+128GB Storage)",imageUrl:"/assets/images/Samsung/Samsung Galaxy M31 Prime Ocean Blue (6GB RAM+128GB Storage).webp",price:16499,samsungroute:"/samsung4",des:"●Immersive viewing with 16.26 cm (6.4 inch) Infinity-U Display",des1:"●2.3 GHz, 1.7 GHz Exynos 9611 Octa-Core Processor",des2:"●Android 10 and One UI 2.0 Operating System",des3:"●64 MP + 8 MP + 5 MP + 5 MP Primary Camera"},
    {name:"Samsung Galaxy M31s",colsto:"Mirage Blue (6GB RAM+128GB Storage)",imageUrl:"/assets/images/Samsung/Samsung Galaxy M31s Mirage Blue (6GB RAM+128GB Storage).webp",price:19499,samsungroute:"/samsung5",des:"●16.40 cm (6.5 inch) Super AMOLED Infinity-O Display",des1:"●8 GB RAM, 128 GB Internal Storage",des2:"●6000 mAh Battery And 25W Fast Charging",des3:"●64MP Quad Camera With Single Take"},
    {name:"Samsung Galaxy M51",colsto:"Electric Blue (6GB RAM+128GB Storage)",imageUrl:"/assets/images/Samsung/Samsung Galaxy M51 Electric Blue (6GB RAM+128GB Storage).webp",price:16499,samsungroute:"/samsung6",des:"●16.95 cm (6.7 inch) Super AMOLED Plus Display",des1:"●6 GB RAM, 128 GB Internal Storage",des2:"●7000 mAh Battery And 25W of Super Fast Charging",des3:"●Blazing Fast Qualcomm Snapdragon 730G Processor"},
    {name:"Samsung Galaxy S10 Plus",colsto:"Prism Blue (8GB RAM+128GB Storage",imageUrl:"/assets/images/Samsung/Samsung Galaxy S10 Plus Prism Blue (8GB RAM+128GB Storage).jpg",price:39999,samsungroute:"/samsung7",des:"●17.02 cm (6.7 inch) Infinity-O Display Full HD+ Super AMOLED Plus Display",des1:"●48 MP + 12 MP + 5 MP Primary Camera, 1080 x 2400 FHD+ Resolution",des2:"●32 MP Selfie Camera, Digital Rear Camera Zoom up to 8x",des3:"●Qualcomm Snapdragon 855 processor",des4:"●Super Steady OIS Camera"},
    {name:"Samsung Galaxy S10",colsto:"Prism Blue (8GB RAM+128GB Storage)",imageUrl:"/assets/images/Samsung/Samsung Galaxy S10 Prism Blue (8GB RAM+128GB Storage).jpg",price:35999,samsungroute:"/samsung8",des:"●8 GB RAM | 128 GB ROM | Expandable Upto 512 GB",des1:"●15.49 cm (6.1 inch) Quad HD+ Display",des2:"●16MP + 12MP | 10MP Front Camera",des3:"●3400 mAh Lithium-ion Battery",des4:"●Exynos 9 9820 Processor"}
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
