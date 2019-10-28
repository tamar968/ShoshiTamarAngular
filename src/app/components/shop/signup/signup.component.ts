import { Component, OnInit } from '@angular/core';
import { Shop } from 'src/app/models/Shop';
import { ShopsService } from 'src/app/services/shops.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { WebResult } from 'src/app/models/WebResult';
import { ToastrService } from 'ngx-toastr';
import { } from '@agm/core/services/google-maps-types';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  options: any = {
    types: [],
    componentRestrictions: { country: 'IL' }
  };
  checkAddress;
  val = "needs-validation";

  shop: Shop = new Shop();
  constructor(private service: ShopsService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
  }


  newShop(isValid:boolean) {
    if (isValid) {
      this.service.onShopAdded(this.shop);
    }
    else {
      this.val = "was-validated";
    }
  }

  handleAddressChange(address) {
    this.checkAddress = false;
    if (address.address_components.length > 4) {
      this.shop.latitude = address.geometry.location.lat();
      this.shop.longitude = address.geometry.location.lng();
      this.shop.addressString = address.formatted_address;
    }
    else {
      this.toastr.error('נדרש להקיש כתובת מורחבת');
    }
    this.checkAddress = true;
    return address.formatted_address;
  }



}

