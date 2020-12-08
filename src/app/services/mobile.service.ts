import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WineService {

  constructor(private http:HttpClient) { }

  getAppleMobile(){
    return this.http.get(`/applemobile/menu`);
  }

  getMainAppleMobile(){
    return this.http.get(`/applemobile/home`);
  }

  getAAppleMobile(id){
    return this.http.get(`/applemobile/particular/${id}`);
  }
}
