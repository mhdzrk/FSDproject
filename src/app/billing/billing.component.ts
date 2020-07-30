import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router,private data:DataService) { }
  date1:number
  userid1 ='';
  products:any=[]
  total:any
  value=''
    ngOnInit(): void {
    this.userid1=localStorage.getItem('userid');

    this.data.gettoupdate1(this.userid1).subscribe(res=>{
      this.products=res.cart
      console.log(this.products);
      
      let sum:Number = this.products.map(a=>a.price).reduce(function(a,b){
        return a + b;
      })
      var sum1=sum.toFixed(2)
      this.total=sum1
      console.log(this.total)
    })
    
    this.date1=Date.now()
    
    
  }

}
