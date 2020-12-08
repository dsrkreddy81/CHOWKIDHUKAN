import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  menu=[
    {name:"Apple iPhone 12",colsto:"Blue (64GB Storage)",imageUrl:"/assets/images/Apple/Apple iPhone 12 Blue (64GB Storage).jpeg",price:"79900",link:"/apple3",image:"/assets/images/Apple-logo-black-and-white.png"},
    {name:"OnePlus 8T Pro 5G",colsto:"Aquamarine Green (12GB RAM+256GB Storage)",imageUrl:"/assets/images/OnePlus/OnePlus 8T 5G Aquamarine Green (12GB RAM+256GB Storage).webp",price:"45999",link:"/oneplus7",image:"/assets/images/Oneplus logo.webp"},
    {name:"Samsung Galaxy M31s",colsto:"Mirage Blue (6GB RAM+128GB Storage)",imageUrl:"/assets/images/Samsung/Samsung Galaxy M31s Mirage Blue (6GB RAM+128GB Storage).webp",price:"19499",link:"/samsung5",image:"/assets/images/samsung logo.jpeg"},
    {name:"OnePlus Nord 5G",colsto:"Gray Onyx (8GB RAM+256GB Storage)",imageUrl:"/assets/images/OnePlus/OnePlus Nord 5G Gray Onyx (8GB RAM+256GB Storage).webp",price:"27999",link:"/oneplus8",image:"/assets/images/Oneplus logo.webp"},
    {name:"Samsung Galaxy M51",colsto:"Electric Blue (6GB RAM+128GB Storage)",imageUrl:"/assets/images/Samsung/Samsung Galaxy M51 Electric Blue (6GB RAM+128GB Storage).webp",price:"16499",link:"/samsung6",image:"/assets/images/samsung logo.jpeg"},
    {name:"Apple iPhone 12 Mini",colsto:"Black (64GB Storage)",imageUrl:"/assets/images/Apple/Apple iPhone 12 Mini Black (64GB Storage).jpeg",price:"69900",link:"/apple4",image:"/assets/images/Apple-logo-black-and-white.png"}
  ];


  productsList=[];
  filterList=[];
  pagedList: any[];
  breakpoint: number = 3;
  length: number = 0;
  pageSize: number = 10;

  constructor() { }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 800) ? 1 : 3;
    this.pagedList = this.productsList.slice(0, 10);
    this.length = this.productsList.length;
}

OnPageChange(event: PageEvent){
  let startIndex = event.pageIndex * event.pageSize;
  let endIndex = startIndex + event.pageSize;
  if(endIndex > this.length){
    endIndex = this.length;
  }
  this.pagedList = this.productsList.slice(startIndex, endIndex);
}

onResize(event) { 
  this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 3;
}

OnChange(){
  this.breakpoint = (window.innerWidth <= 800) ? 1 : 3;
  this.pagedList = this.filterList.slice(0, 10);
  this.length = this.filterList.length;
}

}
