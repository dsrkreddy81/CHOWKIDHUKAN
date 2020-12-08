import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  // getOrders(userid){
  //   return this.http.get(`/order/orders/${userid}`);
  // }
  constructor(private http: HttpClient,
    private _router: Router) { }
    // order(orderc){
    //   console.log(orderc)
    //   return this.http.post("http://localhost:3000/order/order",orderc)
    // }
    getorder(id){
      return this.http.get(`http://localhost:3000/order/orders/${id}`)
    }

}
