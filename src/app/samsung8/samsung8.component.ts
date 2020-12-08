import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from '../cart/cart.component';

export interface DialogData {
  imageUrl: string;
  name: string;
  price:number;
}

@Component({
  selector: 'app-samsung8',
  templateUrl: './samsung8.component.html',
  styleUrls: ['./samsung8.component.css']
})
export class Samsung8Component implements OnInit {

  menu=[
    {name:"Samsung Galaxy S10",colsto:"Prism Blue (8GB RAM+128GB Storage)",imageUrl:"/assets/images/Samsung/Samsung Galaxy S10 Prism Blue (8GB RAM+128GB Storage).jpg",price:35999}
  ]
  high=[
    {des:"8 GB RAM | 128 GB ROM | Expandable Upto 512 GB"},
    {des:"15.49 cm (6.1 inch) Quad HD+ Display"},
    {des:"16MP + 12MP | 10MP Front Camera"},
    {des:"3400 mAh Lithium-ion Battery"},
    {des:"Exynos 9 9820 Processor"}
  ];
  product=[
{des:"Triple rear camera setup: 16MP with f2.2 aperture ultra wide + 12MP with f1.5 and f2.4 aperture wide + 12MP f2.4 tele| Dual front camera setup - 10MP f1.9 Main + 8MP f2.2 live focus"},
{des:"16.35 centimeters (6.4-inch) Dynamic AMOLED multi-touch capacitive touchscreen with 3040 x 1440 pixels resolution, 522 ppi pixel density"},
{des:"Memory, Storage and SIM: 8GB RAM | 128GB internal memory expandable up to 512GB | Dual SIM (nano+nano) dual stand by (4G+4G)"},
{des:"Android Pie v9.0 operating system with 2.7GHz + 2.3GHz + 1.9GHz Exynos 9820 octa core processor"},
{des:"4100mAH lithium-ion battery"},
{des:"The result of 10 years of pioneering mobile firsts, Galaxy S10 series introduce the next generation of mobile innovation. Completely redesigned to remove interruptions from your view. No notch, no distractions. Precise laser cutting, on-screen security, and a Dynamic AMOLED that's easy on the eyes make the Infinity-O Display the most innovative Galaxy screen yet. Use the Ultra Wide Camera to take stunning, cinematic photos with a 123 degree field of vision. Wireless Power Share gives you the ability to share your power with other devices and Fast Wireless Charging 2.0 gets your phone back to 100 percent, faster."},
{des:"1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase	1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase	1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase	1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase"}
  ]

  constructor(private dialog:MatDialog) { }

  onConfirm(){
    this.dialog.open(CartComponent,{width:'300px',data:{imageUrl:this.menu[0].imageUrl,name:this.menu[0].name,price:this.menu[0].price}})
  }


  ngOnInit(): void {
  }

}
