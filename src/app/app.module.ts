import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { Buy1Component } from './buy1/buy1.component';
import { Sell1Component } from './sell1/sell1.component';
import { BuyregisterComponent } from './buyregister/buyregister.component';
import { BuyloginComponent } from './buylogin/buylogin.component';
import {AuthService} from './auth.service';
import { SellregisterComponent } from './sellregister/sellregister.component';
import { SellloginComponent } from './selllogin/selllogin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent }  from './header/header.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { FooterComponent } from './footer/footer.component';
import { ShoperIndexComponent } from './shoper-index/shoper-index.component';
import { ShoperdashboardComponent } from './shoperdashboard/shoperdashboard.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import {FashionComponent} from './fashion/fashion.component'
import { CartComponent } from './cart/cart.component';
import { MyorderComponent } from './myorder/myorder.component';
import { BillingComponent } from './billing/billing.component';
import { OdetailsComponent } from './odetails/odetails.component';
import {AuthGuard} from './auth.guard';
import {Auth2Guard} from './auth2.guard';
import {Auth3Guard} from './auth3.guard';
import {Auth4Guard} from './auth4.guard';


import { from } from 'rxjs';



@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    Buy1Component,
    Sell1Component,
    BuyregisterComponent,
    BuyloginComponent,
    SellregisterComponent,
    SellloginComponent,
    DashboardComponent,
    HeaderComponent,
    NewProductComponent,
    ProductListComponent,
    UpdateproductComponent,
    FooterComponent,
    ShoperIndexComponent,
    ShoperdashboardComponent,
    GroceriesComponent,
    FashionComponent,
    ElectronicsComponent,
    CartComponent,
    MyorderComponent,
    BillingComponent,
    OdetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService,AuthGuard,Auth2Guard,Auth3Guard,Auth4Guard],
  bootstrap: [AppComponent]
})
export class AppModule { }
