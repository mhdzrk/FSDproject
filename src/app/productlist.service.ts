import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductlistService {
  product:any[]=[];

  constructor(private http:HttpClient) { }
  private productlisturl='http://localhost:3000/products'
  private addproductUrl='http://localhost:3000/products/add'
  private deleteUrl='http://localhost:3000/products/delete'
  private updateUrl='http://localhost:3000/products/edit'
 
  loadProducts(){
    return this.http.get<any>(this.productlisturl);
  }
  loadgProducts(){
    return this.http.get<any>(this.productlisturl + '/grocery');
  }
  loadfProducts(){
    return this.http.get<any>(this.productlisturl + '/fashion');
  }
  loadeProducts(){
    return this.http.get<any>(this.productlisturl + '/electronics');
  }
  newProduct(item){
    return this.http.post<any>(this.addproductUrl,item).subscribe(data=>{
      console.log(data)
    });
  }
deleteProduct(_id:String){
  return this.http.delete<any>(this.deleteUrl + `/${_id}`).subscribe(data=>{
    console.log(data)
  })
}
gettoupdate(_id:String){
  return this.http.get<any>(this.productlisturl + `/${_id}`)
}

updateproduct(id,item){
  return this.http.put<any>(this.updateUrl + `/${id}`,item).subscribe(res=>{
    console.log(res)
  },
  err=>{console.log(err)})
}



}
