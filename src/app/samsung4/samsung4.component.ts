import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from '../cart/cart.component';

export interface DialogData {
  imageUrl: string;
  name: string;
  price:number;
}

@Component({
  selector: 'app-samsung4',
  templateUrl: './samsung4.component.html',
  styleUrls: ['./samsung4.component.css']
})
export class Samsung4Component implements OnInit {

  menu=[
    {name:"Samsung Galaxy M31 Prime",colsto:"Ocean Blue (6GB RAM+128GB Storage)",imageUrl:"/assets/images/Samsung/Samsung Galaxy M31 Prime Ocean Blue (6GB RAM+128GB Storage).webp",price:16499}
    ]
  high=[
{des:"Quad camera setup - 64MP (F1.8) main camera + 8MP (F2.2) ultra wide camera + 5MP (F2.2) depth camera + 5MP (F2.4) macro camera | 32MP (F2.0) front facing camera"},
{des:"16.21 centimeters (6.4-inch) Super Amoled - Infinity U cut display, FHD+ capacitive multi-touch touchscreen with 2340 x 1080 pixels resolution, 404 ppi with 16M color support"},
{des:"Android v10.0 operating system with 1.7GHz+2.3GHz Exynos 9611 Octa core processor"},
{des:"Memory, Storage & SIM: 6GB RAM | 128GB internal memory expandable up to 512GB | Dual SIM (nano+nano) dual-standby (4G+4G)"},
{des:"6000mAH lithium-ion battery | 15W Type-C fast charger in the box"}
  ];
  product=[
    {des:"Quad camera setup - 64MP (F1.8) main camera + 8MP (F2.2) ultra wide camera + 5MP (F2.2) depth camera + 5MP (F2.4) macro camera | 32MP (F2.0) front facing camera"},
    {des:"16.21 centimeters (6.4-inch) Super Amoled - Infinity U cut display, FHD+ capacitive multi-touch touchscreen with 2340 x 1080 pixels resolution, 404 ppi with 16M color support"},
    {des:"Android v10.0 operating system with 1.7GHz+2.3GHz Exynos 9611 Octa core processor"},
    {des:"Memory, Storage & SIM: 6GB RAM | 128GB internal memory expandable up to 512GB | Dual SIM (nano+nano) dual-standby (4G+4G)"},
    {des:"6000mAH lithium-ion battery | 15W Type-C fast charger in the box"},
    {des:"1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase"},
    {des:"Box also includes: Travel adapter, USB cable, ejection pin and user manual"}
  ]

  constructor(private dialog:MatDialog) { }

  onConfirm(){
    this.dialog.open(CartComponent,{width:'300px',data:{imageUrl:this.menu[0].imageUrl,name:this.menu[0].name,price:this.menu[0].price}})
  }


  ngOnInit(): void {
  }

}
