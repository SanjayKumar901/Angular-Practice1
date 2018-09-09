import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { LayoutComponent } from './layout.component';
import { AuthGuardGuard } from '../../Services/auth-guard.guard';

const routes: Routes = [
  { 
    path: '',
    component: LayoutComponent ,
    children:[
    { path:'dashboard' , loadChildren : '../dashboard/dashboard.module#DashboardModule', canActivate:[AuthGuardGuard]},
    { path:'employee' , loadChildren : '../employee/employee.module#EmployeeModule', canActivate:[AuthGuardGuard]},
    { path:'department' , loadChildren : '../department/department.module#DepartmentModule', canActivate:[AuthGuardGuard]},
    { path:'user' , loadChildren : '../user/user.module#UserModule', canActivate:[AuthGuardGuard]}
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
