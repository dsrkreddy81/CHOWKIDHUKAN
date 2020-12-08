import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from '../cart/cart.component';

export interface DialogData {
  imageUrl: string;
  name: string;
  price:number;
}

@Component({
  selector: 'app-samsung3',
  templateUrl: './samsung3.component.html',
  styleUrls: ['./samsung3.component.css']
})
export class Samsung3Component implements OnInit {

  menu=[
    {name:"Samsung Galaxy M31",colsto:"Ocean Blue (6GB RAM+128GB Storage)",imageUrl:"/assets/images/Samsung/Samsung Galaxy M31 Ocean Blue (6GB RAM+128GB Storage).webp",price:15999}
  ]
  high=[
{des:"6 GB RAM | 128 GB ROM | Expandable Upto 512 GB"},
{des:"16.26 cm (6.4 inch) Full HD+ Display"},
{des:"64MP + 8MP + 5MP + 5MP | 32MP Front Camera"},
{des:"6000 mAh Battery"},
{des:"Samsung Exynos 9 Octa 9611 Processor"}
  ];
  product=[
    {des:"Quad Camera Setup - 64MP (F1.8) Main Camera +8MP (F2.2) Ultra Wide Camera +5MP(F2.2) Depth Camera +5MP(F2.4) Macro Camera and 32MP (F2.0) front facing Camera"},
{des:"6.4-inch(16.21 centimeters) Super Amoled - Infinity U Cut Display , FHD+ Resolution (2340 x 1080) , 404 ppi pixel density and 16M color support"},
{des:"Android v10.0 operating system with 2.3GHz + 1.7GHz Exynos 9611 Octa core processor , 6GB RAM, 64GB internal memory expandable up to 512GB and dual SIM"},
{des:"6000 mAh Battery"},
{des:"1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase"}
]

  constructor(private dialog:MatDialog) { }

  onConfirm(){
    this.dialog.open(CartComponent,{width:'300px',data:{imageUrl:this.menu[0].imageUrl,name:this.menu[0].name,price:this.menu[0].price}})
  }


  ngOnInit(): void {
  }

}
