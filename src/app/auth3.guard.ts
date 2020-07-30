import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import {DataService} from './data.service'
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Auth3Guard implements CanActivate {
  
  constructor(private data:DataService,private router:Router){}

  canActivate():boolean{
    if(this.data.bloggedin()){
      this.router.navigate(['/buy/index/dashboard'])
      return false
    }else{
      return true
    }
  }
  
}
