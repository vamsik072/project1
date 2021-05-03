import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EmployeeListComponent } from './EmployeeList/EmployeeList.component';
import { Parent2Component } from './routerchild/parent2/parent2.component';
import { Parent1Component } from './routerchild/parent1/parent1.component';
import { Child1Component } from './routerchild/child1/child1.component';
import { Child2Component } from './routerchild/child2/child2.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { TdfComponent } from './tdf/tdf.component';
import {FormsModule} from '@angular/forms';
import { VtdfComponent } from './FormEx/vtdf/vtdf.component';

@NgModule({
  declarations: [
    AppComponent,
      EmployeedetailsComponent,
      PagenotfoundComponent,
      EmployeeListComponent,
      Parent1Component,
      Parent2Component,
      Child1Component,
      Child2Component,
      AdminHomeComponent,
      TdfComponent,
      VtdfComponent,



   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
