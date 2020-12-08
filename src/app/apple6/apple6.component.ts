import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from '../cart/cart.component';

export interface DialogData {
  imageUrl: string;
  name: string;
  price:number;
}

@Component({
  selector: 'app-apple6',
  templateUrl: './apple6.component.html',
  styleUrls: ['./apple6.component.css']
})
export class Apple6Component implements OnInit {

  menu=[
    {name:"Apple iPhone SE",colsto:"Black (64GB Storage)",imageUrl:"/assets/images/Apple/Apple iPhone SE Black (64GB Storage).jpeg",price:39900}
  ]
  content=[
    {des:"64 GB ROM"},
    {des:"11.94 cm (4.7 inch) Retina HD Display"},
    {des:"12MP Rear Camera | 7MP Front Camera"},
    {des:"A13 Bionic Chip with 3rd Gen Neural Engine Processor"},
    {des:"Water and Dust Resistant (1 meter for Upto 30 minutes, IP67)"},
    {des:"Fast Charge Capable"},
    {des:"Wireless charging (Works with Qi Chargers | Qi Chargers are Sold Separately"},
    {des:"iPhone SE is the most powerful 11.94-cm (4.7) iPhone ever. It features the incredibly-fast A13 Bionic for incredible performance in apps, games, and photography, Portrait mode for studio-quality portraits and six lighting effects, Next-generation Smart HDR for incredible detail across highlights and shadows, Cinematic-quality 4K video, and all the advanced features of iOS. With long battery life and water resistance, it’s so much of the iPhone you love, in a not-so-big size."}
  ]

  constructor(private dialog:MatDialog) { }

  onConfirm(){
    this.dialog.open(CartComponent,{width:'300px',data:{imageUrl:this.menu[0].imageUrl,name:this.menu[0].name,price:this.menu[0].price}})
  }

  ngOnInit(): void {
  }

}
