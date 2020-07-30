import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import {DataService} from './data.service'
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Auth2Guard implements CanActivate {
  
  constructor(private data:DataService,private router:Router){}

  canActivate():boolean{
    if(this.data.bloggedin()){
      return true
    }else{
      this.router.navigate(['/buy/buylogin'])
      return false
    }
  }
  
}
