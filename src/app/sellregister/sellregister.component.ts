import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';
import {AuthService} from '../auth.service';
import { Router } from '@angular/router';
import {regModel} from './regmodel'
import { from } from 'rxjs';

@Component({
  selector: 'app-sellregister',
  templateUrl: './sellregister.component.html',
  styleUrls: ['./sellregister.component.css']
})
export class SellregisterComponent implements OnInit {
  users=new regModel(null,null,null,null,null)
  constructor(private auth:AuthService,private router:Router,
    private fb:FormBuilder) { }

    registerForm=this.fb.group(
      {
          name: ['',[Validators.minLength(4),Validators.required]],
          email:['',[Validators.required,Validators.email]],
          username:['',[Validators.required,Validators.minLength(6)]],
          password:['',[Validators.minLength(8),Validators.required]],
          phone:['',[Validators.required,Validators.minLength(10),Validators.pattern("[0-9]{10,10}")]]

       })


  ngOnInit(): void {
  }

  

  registerShop(){
    console.log(this.users);
    this.auth.register(this.users).subscribe(res=>{
      console.log(res)
      localStorage.setItem('sToken',res.token)
      this.router.navigate(['/sell/dashboard/productlist'])

    },
    err=>{
      console.log(err)})

  }
}
