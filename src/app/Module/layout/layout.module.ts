import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  { 
    path: '',
    component: LayoutComponent , 
    children:[
    { path:'dashboard' , loadChildren : '../dashboard/dashboard.module#DashboardModule'},
    { path:'employee' , loadChildren : '../employee/employee.module#EmployeeModule'},
    { path:'department' , loadChildren : '../department/department.module#DepartmentModule'},
    { path:'user' , loadChildren : '../user/user.module#UserModule'}
  ]
}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule],
  declarations: [HeaderComponent,FooterComponent,LayoutComponent]
})
export class LayoutModule { }
