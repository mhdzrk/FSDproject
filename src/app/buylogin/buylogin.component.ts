import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LogModel } from './loginmodel';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-buylogin',
  templateUrl: './buylogin.component.html',
  styleUrls: ['./buylogin.component.css']
})
export class BuyloginComponent implements OnInit {

  constructor(private auth:AuthService,private router:Router,
    private fb:FormBuilder) { }
    users=new LogModel(null,null)

    registerForm=this.fb.group({
      username:['',[Validators.required,Validators.minLength(6)]],
      password:['',[Validators.minLength(8),Validators.required]]
})

  ngOnInit(): void {
  }
  loginUser(){
    console.log(this.users);
    this.auth.login(this.users).subscribe(res=>{
      console.log(res)
      localStorage.setItem('bToken',res.token)
      localStorage.setItem('userid',res.user._id)
      this.router.navigate(['/buy/index/dashboard'])
    },
    err=>{
      console.log(err)})

  }

}
