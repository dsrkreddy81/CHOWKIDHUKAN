import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from '../cart/cart.component';

export interface DialogData {
  imageUrl: string;
  name: string;
  price:number;
}

@Component({
  selector: 'app-samsung2',
  templateUrl: './samsung2.component.html',
  styleUrls: ['./samsung2.component.css']
})
export class Samsung2Component implements OnInit {

  menu=[
    {name:"Samsung Galaxy M21",colsto:"Midnight Blue (4GB RAM+64GB Storage)",imageUrl:"/assets/images/Samsung/Samsung Galaxy M21 Midnight Blue (4GB RAM+64GB Storage).webp",price:13999}
  ]
  high=[
{des:"4 GB RAM | 64 GB ROM | Expandable Upto 512 GB"},
{des:"16.26 cm (6.4 inch) Full HD+ Display"},
{des:"48MP + 8MP + 5MP | 20MP Front Camera"},
{des:"6000 mAh Battery"},
 {des:"Exynos 9611-Octa Core processor Processor"}
  ];
  product:[
{des:"Triple Camera Setup - 48MP (F1.8) Main Camera +8MP (F2.2) Ultra Wide Camera +5MP(F2.2) Depth Camera and 20MP (F2.2) front facing Punch Hole Camera"},
{des:"6.4-inch(16.21 centimeters) Super Amoled - Infinity U Cut Display , FHD+ Resolution (2340 x 1080) , 404 ppi pixel density and 16M color support"},
{des:"Android 10.0 operating system with Exynos 9611,2.3GHz,1.7GHz Octa-Core processor, 4GB RAM, 64GB internal memory expandable up to 512GB and dual SIM"},
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
