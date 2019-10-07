import { Component, OnInit } from '@angular/core';
import { ShopsService } from 'src/app/services/shops.service';
import { ToastrService } from 'ngx-toastr';
import { WebResult } from 'src/app/models/WebResult';

@Component({
  selector: 'app-add-new-category',
  templateUrl: './add-new-category.component.html',
  styleUrls: ['./add-new-category.component.css']
})
export class AddNewCategoryComponent implements OnInit {


  constructor(private service: ShopsService, private toastr: ToastrService) { }

  ngOnInit() {
  }
  onAddNewCategory(newCategory) {
    this.service.newCategory(newCategory.value);
  }
}
