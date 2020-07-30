import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProductlistService} from '../productlist.service'
import { AuthService } from '../auth.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-groceries',
  templateUrl: './groceries.component.html',
  styleUrls: ['./groceries.component.css']
})
export class GroceriesComponent implements OnInit {
  products:[];

  constructor(private auth:AuthService,private prlist:ProductlistService,private router:Router) { }

  ngOnInit(): void {
    this.prlist.loadgProducts().subscribe(
      res=>{
        this.products=JSON.parse(JSON.stringify(res));
        console.log(this.products);
        },
      err=>console.log(err)
    )
  }

  addcart(product){
    let userid=localStorage.getItem('userid')
    console.log(userid)
    console.log(product)
    this.auth.push(userid,product).subscribe(res=>console.log(res),
    error=>console.log(error)
    )
  }

}
