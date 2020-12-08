import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient,
    private _router: Router) { }
    cart(cartc){
      console.log(cartc)
      return this.http.post("http://localhost:3000/cart/cart",cartc)
    }
    getcart(id){
      return this.http.get(`http://localhost:3000/cart/getcarts/${id}`)
    }
    clearCart(cartc){
      return this.http.delete<any>(`http://localhost:3000/cart/removeAll/${cartc[0].userid}`);
    }
    addCart(cartc){
      return this.http.post(`http://localhost:3000/cart/add`,cartc);
    }
    checkOut(cartc){
      return this.http.post(`http://localhost:3000/order/move`,cartc);
    }
}
