import { Component, OnInit } from '@angular/core';
import { ShopsService } from 'src/app/services/shops.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ShopsGuard } from 'src/app/shops.guard';

@Component({
  selector: 'app-singout',
  templateUrl: './singout.component.html',
  styleUrls: ['./singout.component.css']
})
export class SingoutComponent implements OnInit {

  constructor(public service: ShopsService, private router: Router, private toastr: ToastrService) {
  }

  ngOnInit() {

  }
  onSingout() {
    this.service.onLogOut();
  }
}
