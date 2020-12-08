import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apple-mobile',
  templateUrl: './apple-mobile.component.html',
  styleUrls: ['./apple-mobile.component.css']
})
export class AppleMobileComponent implements OnInit {

  menu=[
    {name:"Apple iPhone 11",colsto:"Black (128GB Storage)",imageUrl:"/assets/images/Apple/Apple iPhone 11 Black (128GB Storage).webp",price:59900,appleroute:"/apple1",des:"●128 GB ROM",des1:"●15.49 cm (6.1 inch) Liquid Retina HD Display",des2:"●12MP + 12MP | 12MP Front Camera",des3:"●A13 Bionic Chip Processor"},
    {name:"Apple iPhone 11 Pro Max",colsto:"Midnight Green (64GB Storage)",imageUrl:"/assets/images/Apple/Apple iPhone 11 Pro Max Midnight Green (64GB Storage).webp",price:106729,appleroute:"/apple2",des:"●64 GB ROM",des1:"●16.51 cm (6.5 inch) Super Retina XDR Display",des2:"●12MP + 12MP + 12MP | 12MP Front Camera",des3:"●A13 Bionic Chip Processor"},
    {name:"Apple iPhone 12",colsto:"Blue (64GB Storage)",imageUrl:"/assets/images/Apple/Apple iPhone 12 Blue (64GB Storage).jpeg",price:79900,appleroute:"/apple3",des:"●64 GB ROM",des1:"●15.49 cm (6.1 inch) Display",des2:"●12MP Rear Camera | 7MP Front Camera",des3:"●A13 Bionic Chip Processor",des4:"●iOS 13 Compatible"},
    {name:"Apple iPhone 12 Mini",colsto:"Black (64GB Storage)",imageUrl:"/assets/images/Apple/Apple iPhone 12 Mini Black (64GB Storage).jpeg",price:69900,appleroute:"/apple4",des:"●64 GB ROM",des1:"●13.72 cm (5.4 inch) Super Retina XDR Display",des2:"●12MP + 12MP | 12MP Front Camera",des3:"●A14 Bionic Chip with Next Generation Neural Engine Processor",des4:"●Ceramic Shield",des5:"●IP68 Water Resistance",des6:"●All Screen OLED Display"},
    {name:"Apple iPhone 12 Pro Max",colsto:"Pacific Blue (256GB Storage)",imageUrl:"/assets/images/Apple/Apple iPhone 12 Pro Max Pacific Blue (256GB Storage).jpeg",price:139900,appleroute:"/apple5",des:"●256 GB ROM",des1:"●17.02 cm (6.7 inch) Super Retina XDR Display",des2:"●12MP + 12MP + 12MP | 12MP Front Camera",des3:"●A14 Bionic Chip with Next Generation Neural Engine Processor",des4:"●Ceramic Shield | IP68 Water Resistance",des5:"●All Screen OLED Display",des6:"●LiDAR Scanner for Improved AR Experiences"},
    {name:"Apple iPhone SE",colsto:"Black (64GB Storage)",imageUrl:"/assets/images/Apple/Apple iPhone SE Black (64GB Storage).jpeg",price:39900,appleroute:"/apple6",des:"●64 GB ROM",des1:"●11.94 cm (4.7 inch) Retina HD Display",des2:"●12MP Rear Camera | 7MP Front Camera",des3:"●A13 Bionic Chip with 3rd Gen Neural Engine Processor",des4:"●Water and Dust Resistant (1 meter for Upto 30 minutes, IP67)",des5:"●Fast Charge Capable",des6:"●Wireless charging (Works with Qi Chargers | Qi Chargers are Sold Separately)"},
    {name:"Apple iPhone X",colsto:"Space Grey (256GB Storage).webp",imageUrl:"/assets/images/Apple/Apple iPhone X Space Grey (256GB Storage).webp",price:74990,appleroute:"/apple7",des:"●256 GB ROM",des1:"●14.73 cm (5.8 inch) Super Retina HD Display",des2:"●12MP + 12MP | 7MP Front Camera",des3:"●A11 Bionic Chip with 64-bit Architecture, Neural Engine", des4:"●Embedded M11 Motion Coprocessor Processor"},
    {name:"Apple iPhone XR",colsto:"White (64GB Storage)",imageUrl:"/assets/images/Apple/Apple iPhone XR White (64GB Storage).jpeg",price:44900,appleroute:"/apple8",des:"●64 GB ROM",des1:"●15.49 cm (6.1 inch) Display",des2:"●12MP Rear Camera | 7MP Front Camera",des3:"●A12 Bionic Chip Processor",des4:"●iOS 13 Compatible"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
