import { Component, OnInit, Input } from '@angular/core';
import { Shop } from 'src/app/models/Shop';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopsService } from 'src/app/services/shops.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  shop: Shop=new Shop();
  constructor(private shopSrv: ShopsService,private router: Router) {
    this.shop = this.shopSrv.shop;
    // this.shopSrv.shopChanges.subscribe((data) => {
    //   this.shop = data;
    // });
  }

  ngOnInit() {
    
  }
  onUpdate(){
    this.router.navigate(['/update'])
  }
}
