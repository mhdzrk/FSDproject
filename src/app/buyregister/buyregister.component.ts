import { Component, OnInit } from '@angular/core';
import {RegModel} from './RegModel';
import { Router } from '@angular/router';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';
import {AuthService} from '../auth.service';


@Component({
  selector: 'app-buyregister',
  templateUrl: './buyregister.component.html',
  styleUrls: ['./buyregister.component.css']
})
export class BuyregisterComponent implements OnInit {
  users=new RegModel(null,null,null,null,null)
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

  registerUser(){
    console.log(this.users);
    this.auth.signup(this.users).subscribe( res=>{
      console.log(res);
      localStorage.setItem('bToken',res.token)
      localStorage.setItem('userid',res.user._id)
      this.router.navigate(['/buy/index/dashboard'])

    },
      err=>console.log(err))
    

  }

}
