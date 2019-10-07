import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShopsService } from 'src/app/services/shops.service';
import { Category } from 'src/app/models/Category';
import { WebResult } from 'src/app/models/WebResult';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-showcategory',
  templateUrl: './showcategory.component.html',
  styleUrls: ['./showcategory.component.css']
})
export class ShowcategoryComponent implements OnInit {
  Categories: Category[];
  dropdownList;
  dropdownSettings;
  @Input() selectedCategories;
  @Output() addCategories = new EventEmitter<{selectedCategories:Category[]}>();
  constructor(private service: ShopsService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.getAllCategories().subscribe((res:WebResult)=>{
    //  this.toastr.success(res.Message);
      this.Categories = res.Value;
      this.dropdownList = this.Categories;
      if(this.service.shop!=null)
         this.selectedCategories=this.service.shop.Categories;
      this.dropdownSettings = {
        singleSelection: false,
        idField: 'codeCategory',
        textField: 'nameCategory',
        selectAllText: 'בחר הכל',
        unSelectAllText: 'בטל הכל',
        itemsShowLimit: this.Categories.length,
        allowSearchFilter: true,
        searchPlaceholderText	:'חפש'     
       };
    })
   
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onItemSelect(item:any){
    console.log(this.selectedCategories);
    this.service.addCategories(this.selectedCategories);
  }

}
