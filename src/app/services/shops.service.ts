import { Injectable } from '@angular/core';
import { Shop } from '../models/Shop';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { WebResult } from '../models/WebResult';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root'
})

export class ShopsService {
  public shop: Shop;
  public categoriesForShop: Category[];
  httpOptions;
  private baseUrl = 'http://localhost:55505/';
  constructor(private myHttp: HttpClient, private router: Router, private toastr: ToastrService) {
    this.getHttpOptions();
    this.getCurrentShop();
  }

  onSignin(getShop: Shop) {
    return this.myHttp.get(`${this.baseUrl}WebService/Shops/Login?mail=${getShop.mailShop}&password=${getShop.passwordShop}`)
      .subscribe((res: any) => { this.afterLogin(res); });;
  }

  afterLogin(res) {
    if (res.Status) {
      var token = JSON.parse(res.Value.TokenJson)
      this.changeToken(token.access_token);
      localStorage.token = token.access_token;
      this.shop = res.Value.shopDTO;
      this.toastr.success(res.Message)
      this.router.navigate(['/home']);
    }
    else this.toastr.error(res.Message);
  }
  addCategories(categories: Category[]) {
    console.log(categories);
    this.categoriesForShop = categories;
  }


  onShopAdded(getShop: Shop) {
    getShop.Categories = this.categoriesForShop;
    return this.myHttp.post(`${this.baseUrl}WebService/Shops/Register`, getShop)
      .subscribe((res: Shop) => { this.afterLogin(res); });
  }

  onUpdate(getShop: Shop) {
    if (this.categoriesForShop)
      getShop.Categories = this.categoriesForShop;
    return this.myHttp.post(`${this.baseUrl}WebService/Shops/Update`, getShop);
  }

  onLogOut() {
    this.myHttp.get(`${this.baseUrl}WebService/Shops/Logout`, this.httpOptions).subscribe((res: any) => {
      if (res.Status) {
        this.shop = null;
        this.resetToken();
        localStorage.token = null;
        this.router.navigate(["/signin"]);
        this.toastr.success(res.Message)
      }
    });;
  }

  getAllCategories() {
    return this.myHttp.get(`${this.baseUrl}WebService/Shops/GetAllCategories`);
  }

  getSearchesForShop(codeShop: number) {
    return this.myHttp.get(`${this.baseUrl}WebService/Shops/GetSearches?codeShop=${codeShop}`, this.httpOptions);
  }

  getCurrentShop() {
    this.getLoggedShop().subscribe((res: any) => {
      this.shop = res;
    })
  }
  getLoggedShop() {
    return this.myHttp.get(`${this.baseUrl}WebService/Shops/getLoggedShop`, this.httpOptions);
  }
  getHttpOptions() {
    this.resetToken();
    var token = localStorage.token;
    console.log("token: " + token);
    if (token)
      this.changeToken(token);
  }
  changeToken(token: string = "") {
    if (token != "")
      localStorage.setItem("user_token", token);
    else {
      token = localStorage.getItem("user_token");
    }

    console.log(token);
    this.httpOptions.headers =
      new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
  }
  resetToken() {
    localStorage.setItem("user_token", "");
    this.httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': '' }) };
  }
  newCategory(newCategory) {
    return this.myHttp.get(`${this.baseUrl}WebService/Shops/NewCategory?newCategory=${newCategory}`, this.httpOptions).subscribe((res: any) => {
      if (res.Status == true) {
        this.toastr.success(res.Message);
      }
      else {
        this.toastr.error(res.Message);
      }
    });
  }
}
