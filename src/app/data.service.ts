import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getUrl='http://localhost:3000/orders/shipment';
  postUrl='http://localhost:3000/orders/checkout';
  getUrl1='http://localhost:3000/user/getto'


  constructor(private http:HttpClient) { }


orderpost(item){
  return this.http.post<any>(this.postUrl,item)
}
orderget(){
  return this.http.get<any>(this.getUrl)
}
gettoupdate(id){
  return this.http.get<any>(this.getUrl + `/${id}`)
}
gettoupdate1(id){
  return this.http.get<any>(this.getUrl1 + `/${id}`)
}
bloggedin(){
  return !!localStorage.getItem('bToken')
}
sloggedin(){
  return !!localStorage.getItem('sToken')
}


}
