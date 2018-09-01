import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Module/Login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: '' , loadChildren : './Module/layout/layout.module#LayoutModule'},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  declarations: [LoginComponent]
})
export class AppRoutingModule { }
