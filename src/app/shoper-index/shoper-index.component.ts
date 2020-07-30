import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shoper-index',
  templateUrl: './shoper-index.component.html',
  styleUrls: ['./shoper-index.component.css']
})
export class ShoperIndexComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
buyout(){
  localStorage.removeItem('bToken')
  localStorage.removeItem('userid')
  this.router.navigate(['/'])
  
}
}
