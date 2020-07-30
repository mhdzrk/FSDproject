import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProductlistService} from '../productlist.service'
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {
  products:[];

  constructor(private auth:AuthService,private prlist:ProductlistService,private router:Router) { }

  ngOnInit(): void {
    this.prlist.loadeProducts().subscribe(
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
