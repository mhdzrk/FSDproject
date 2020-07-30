import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LogModel } from '../buylogin/loginmodel';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-selllogin',
  templateUrl: './selllogin.component.html',
  styleUrls: ['./selllogin.component.css']
})
export class SellloginComponent implements OnInit {

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
    this.auth.log(this.users).subscribe(res=>{
      console.log(res);
      localStorage.setItem('sToken',res.token);
      this.router.navigate(['/sell/dashboard/productlist']);
    },
    err=>{
      console.log(err)})

  }

}
