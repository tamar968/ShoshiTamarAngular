import { Component } from '@angular/core';
import { ShopsService } from './services/shops.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sequence';
  constructor(public service: ShopsService) {
  }
}
