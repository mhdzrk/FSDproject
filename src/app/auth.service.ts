import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { RegModel } from './buyregister/RegModel';
import { LogModel } from './buylogin/loginmodel';
import {regModel} from './sellregister/regmodel';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private signupUrl='http://localhost:3000/user/signup';
  private loginUrl='http://localhost:3000/user/login';
  private regUrl='http://localhost:3000/owner/signup';
  private logUrl='http://localhost:3000/owner/login';
  private pushUrl='http://localhost:3000/user/push';
  private pullUrl='http://localhost:3000/user/pull';
  private getUrl='http://localhost:3000/user/get';

  constructor(private http:HttpClient) { }

  signup(item:RegModel){
    return this.http.post<any>(this.signupUrl,item)
  }

  login(item:LogModel){
    return this.http.post<any>(this.loginUrl,item)
  }

  register(item:regModel){
    return this.http.post<any>(this.regUrl,item)
  }

  log(item:LogModel){
    return this.http.post<any>(this.logUrl,item)
  }
  push(id,item){
    return this.http.put<any>(this.pushUrl +`/${id}`,item)
  }
  cart(id){
    return this.http.get<any>(this.getUrl + `/${id}`)
  }
  uncart(id,item){
    return this.http.put<any>(this.pullUrl + `/${id}`,item)
  }
}
