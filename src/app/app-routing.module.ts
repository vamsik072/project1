import { EmployeeListComponent } from './EmployeeList/EmployeeList.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { Parent1Component } from './routerchild/parent1/parent1.component';
import { Parent2Component } from './routerchild/parent2/parent2.component';
import { Child1Component } from './routerchild/child1/child1.component';
import { Child2Component } from './routerchild/child2/child2.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminAccessGuard } from './admin-access.guard';
const routes: Routes = [
  { path: '', redirectTo: '/student', pathMatch: 'full' },
  { path: 'admin',
  component:AdminHomeComponent,
canActivate:[AdminAccessGuard]
},
  { path: 'course', component: EmployeeListComponent },
  { path: 'course/:id', component: EmployeedetailsComponent },



  //child
  {
    path: 'parent1',
    component: Parent1Component,
    children: [
      { path: 'child1', component: Child1Component },
      { path: 'child2', component: Child2Component }

    ]


  },
  {
    path: 'parent2', component: Parent2Component,
    children: [
      { path: 'child1', component: Child1Component },
      { path: 'child2', component: Child2Component }

    ]

  },
  { path: 'faculty', loadChildren: () => import('./faculty/faculty.module').then(m => m.FacultyModule) },

  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
