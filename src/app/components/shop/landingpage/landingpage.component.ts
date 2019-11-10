import { Component, OnInit } from '@angular/core';
import { ShopsService } from 'src/app/services/shops.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  constructor(public service: ShopsService) { }

  ngOnInit() {
  }

}
