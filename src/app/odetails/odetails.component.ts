import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-odetails',
  templateUrl: './odetails.component.html',
  styleUrls: ['./odetails.component.css']
})
export class OdetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router,private data:DataService) { }
  date1:any
  id='';
  products:any=[]
  resp='';
  value='';
  total:any
  prices:any=[];
    ngOnInit(): void {
    this.route.paramMap.subscribe(parameterMap=>{
      this.id=parameterMap.get('id')
      console.log(this.id)
    })

    this.data.gettoupdate(this.id).subscribe(res=>{
      this.resp=JSON.parse(JSON.stringify(res._id))
      this.products=JSON.parse(JSON.stringify(res.cart))
      this.prices=this.products.price
      console.log(this.prices)
      console.log(this.products);
      console.log(this.resp);

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
