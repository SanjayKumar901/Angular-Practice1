import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './Module/login/login.component';
import { LayoutComponent } from './Module/layout/layout.component';
import { FooterComponent } from './Module/footer/footer.component';
import { DashboardComponent } from './Module/dashboard/dashboard.component';
import { UserComponent } from './Module/user/user.component';
import { DepartmentComponent } from './Module/department/department.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    FooterComponent,
    DashboardComponent,
    UserComponent,
    DepartmentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
