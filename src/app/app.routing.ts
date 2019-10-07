import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './components/shop/home/home.component';
import { SigninComponent } from './components/shop/signin/signin.component';
import { SignupComponent } from './components/shop/signup/signup.component';
import { ShopsGuard } from './shops.guard';
import { UpdateComponent } from './components/shop/update/update.component';
import { StatisticsComponent } from 'src/app/components/shop/statistics/statistics.component';

const myAppRoutes: Routes = [
    {path:'',component:HomeComponent,canActivate:[ShopsGuard]},
    {path:'update',component:UpdateComponent,canActivate:[ShopsGuard]},
    {path:'signin',component:SigninComponent},
    {path:'signup',component:SignupComponent},
    {path:'statistics',component:StatisticsComponent,canActivate:[ShopsGuard]},
    {path:'**',redirectTo:''}
  ];
  
  @NgModule({
    imports: [
      RouterModule.forRoot(myAppRoutes)
    ],
    exports: [RouterModule]
  })
  export class MyRoutingModule { }
  