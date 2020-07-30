import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import {DataService} from '../data.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  imageWidth:number=50;
  imageMargin:number=2;
  title:String='Cart'
products:[]
resp:[]
  constructor(private auth:AuthService,private router:Router,private data:DataService) { }
  public userid1=localStorage.getItem('userid')
  ngOnInit(): void {
    let userid=localStorage.getItem('userid')
    this.auth.cart(userid).subscribe(
      res=>{console.log(res)
        this.products=res.cart;
        this.resp=res
        console.log(this.products)
      },
      error=>{console.log(error)}
    )
  }

  delete(item){
    console.log(item);
    let userid=localStorage.getItem('userid')
    if(confirm("do you wanna remove this product from cart")==true){
    this.auth.uncart(userid,item)
    .subscribe(
      res=>{
        console.log(res);
        this.ngOnInit();
        this.router.navigate(['/buy/index/cart']);
        
      },
      error=>{
        console.log(error);
        this.router.navigate(['/buy/index/cart']);
    })
    
  }
  else{
    console.log("ok");
    this.router.navigate(['/buy/index/cart']);
  }
  this.router.navigate(['/buy/index/cart']);
  }
  order(){
    this.data.orderpost(this.resp).subscribe(res=>console.log(res),
    err=>console.log(err));
    this.router.navigate(['/buy/index/billing',this.userid1]);
    

  }
}


