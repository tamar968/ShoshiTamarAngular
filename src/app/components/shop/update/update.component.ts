import { Component, OnInit } from '@angular/core';
import { ShopsService } from 'src/app/services/shops.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Shop } from 'src/app/models/Shop';
import { WebResult } from 'src/app/models/WebResult';
import { Category } from 'src/app/models/Category';
import { ShowcategoryComponent } from '../../category/showcategory/showcategory.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  options: any = {
    types: [],
    componentRestrictions: { country: 'IL' }
  };
  checkAddress;
  shop: Shop = new Shop();
  constructor(private service: ShopsService, private router: Router, private toastr: ToastrService) {
    this.shop = this.service.shop;
  }

  ngOnInit() {
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


  updateShop() {

    this.service.onUpdate(this.shop).subscribe((res: WebResult) => {
      if (res.Status == true) {
        this.service.shop = res.Value;
        this.toastr.success(res.Message);
        this.router.navigate(['/home'])
      }
      else {
        this.toastr.error(res.Message);
      }
    });
  }
}
