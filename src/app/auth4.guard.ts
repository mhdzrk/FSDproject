import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import {DataService} from './data.service'
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Auth4Guard implements CanActivate {
  
  constructor(private data:DataService,private router:Router){}

  canActivate():boolean{
    if(this.data.sloggedin()){
      this.router.navigate(['/sell/dashboard/productlist'])
      return false
    }else{
      return true
    }
  }
  
}
