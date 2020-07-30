import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.css']
})
export class MyorderComponent implements OnInit {
products:[]
resps:[]
title:String="Orders"
  constructor(private data:DataService,private router:Router) { }

  ngOnInit(): void {
    
    this.data.orderget().subscribe(res=>{
      console.log(res);
      this.resps=res;
      this.products=res[0].cart;
      console.log(this.products);
    })

    }

    details(id){
      this.router.navigate(['/sell/dashboard/details',id]);
    }

}
