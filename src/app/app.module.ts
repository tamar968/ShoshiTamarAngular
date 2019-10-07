import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/shop/home/home.component';
import { FormsModule } from '@angular/forms';
import { MyRoutingModule } from './app.routing';
import { SigninComponent } from './components/shop/signin/signin.component';
import { SignupComponent } from './components/shop/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { ShopsGuard } from './shops.guard';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ShowcategoryComponent } from './components/category/showcategory/showcategory.component';
import { UpdateComponent } from './components/shop/update/update.component';
import { AgmCoreModule } from '@agm/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { SingoutComponent } from './components/shop/singout/singout.component';
import { AddNewCategoryComponent } from './components/category/add-new-category/add-new-category.component';
import { StatisticsComponent } from './components/shop/statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    ShowcategoryComponent,
    UpdateComponent,
    SingoutComponent,
    AddNewCategoryComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MyRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(
      {
        positionClass: 'toast-top-center',
        tapToDismiss: true,
        progressBar: true,
        progressAnimation: 'increasing',
        maxOpened: 3,
        autoDismiss: true,
        preventDuplicates: true,
        resetTimeoutOnDuplicate: true,
        newestOnTop: false,
        timeOut: 5000,
        extendedTimeOut: 1500,
        enableHtml: true
      }),
    AgmCoreModule.forRoot({
     // apiKey: 'AIzaSyBqxfCJBBZXu7ih3wu0fKh4Adt0-LxEbGU' 
     //apiKey: 'AIzaSyB6XGmiIhsaoXzLTu611HLGNL74ZEWIaSE'
     apiKey: 'AIzaSyDxG3TDFOXmRB5XpG9Yfh40VCs5Aqr93jo'
    }),
    NgMultiSelectDropDownModule.forRoot(),
    GooglePlaceModule,

  ],
  providers: [ShopsGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }



