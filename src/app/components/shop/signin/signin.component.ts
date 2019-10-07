import { Component, OnInit } from '@angular/core';
import { Shop } from 'src/app/models/Shop';
import {ShopsService} from 'src/app/services/shops.service';
import { MyRoutingModule } from 'src/app/app.routing';
import { Router } from '@angular/router';
import { WebResult } from 'src/app/models/WebResult';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  shop: Shop = new Shop();

  constructor(private service: ShopsService,private router: Router,private toastr: ToastrService) { }
  ngOnInit() {
    
  }

onLogin(){
  this.service.onSignin(this.shop);
}
  // onLogin(){
  //  this.service.onSignin(this.shop).subscribe((res: WebResult) => {
  //   console.log(res);
  //   if(res.Status==true){
  //     this.toastr.success(res.Message);
  //     this.router.navigate(['/home']);
  //     this.service.setShop(res.Value);
  //   }
  //   else{
  //     this.toastr.error(res.Message);
  //   }  
  // });
  // }
  onUpdate(){
    this.router.navigate(['/update'])
  }
}
