import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Buy1Component } from './buy1/buy1.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { Sell1Component } from './sell1/sell1.component';
import { BuyloginComponent } from './buylogin/buylogin.component';
import { BuyregisterComponent } from './buyregister/buyregister.component';
import {SellloginComponent} from './selllogin/selllogin.component';
import {SellregisterComponent} from './sellregister/sellregister.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NewProductComponent } from './new-product/new-product.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { ShoperdashboardComponent } from './shoperdashboard/shoperdashboard.component';
import { ShoperIndexComponent } from './shoper-index/shoper-index.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { CartComponent } from './cart/cart.component';
import { MyorderComponent } from './myorder/myorder.component';
import { OdetailsComponent } from './odetails/odetails.component';
import { BillingComponent } from './billing/billing.component';
import { AuthGuard } from './auth.guard';
import { Auth2Guard } from './auth2.guard';
import { Auth4Guard } from './auth4.guard';
import { Auth3Guard } from './auth3.guard';
import { FashionComponent } from './fashion/fashion.component';
import { ElectronicsComponent } from './electronics/electronics.component';


const routes: Routes = [{path:'',component:FirstpageComponent},{path:'buy',component:Buy1Component,canActivate:[Auth3Guard]},
{path:'sell',component:Sell1Component,canActivate:[Auth4Guard]},{path:'buy/buylogin',component:BuyloginComponent,canActivate:[Auth3Guard]},
{path:'buy/buyregister',component:BuyregisterComponent,canActivate:[Auth3Guard]},
{path:'sell/selllogin',component:SellloginComponent,canActivate:[Auth4Guard]},
{path:'sell/sellregister',component:SellregisterComponent,canActivate:[Auth4Guard]},
{path:'sell/dashboard',component:DashboardComponent,canActivate:[AuthGuard],
children:[{path:'productlist',component:ProductListComponent},
{path:'edit/:id',component:UpdateproductComponent},
{path:'newproduct',component:NewProductComponent},
{path:'order',component:MyorderComponent},
{path:'details/:id',component:OdetailsComponent}]},
{path:'buy/index',component:ShoperIndexComponent,canActivate:[Auth2Guard],
children:[{path:'dashboard',component:ShoperdashboardComponent},
{path:'groceries',component:GroceriesComponent},{path:'fashion',component:FashionComponent},
{path:'electronics',component:ElectronicsComponent},
{path:'cart',component:CartComponent},{path:'billing/:id',component:BillingComponent}]}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
