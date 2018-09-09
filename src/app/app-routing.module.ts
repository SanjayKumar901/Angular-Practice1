import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Module/Login/login.component';
import { AuthGuardGuard } from './Services/auth-guard.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: '' , loadChildren : './Module/layout/layout.module#LayoutModule', canActivate:[AuthGuardGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule,ReactiveFormsModule],
  declarations: [LoginComponent]
})
export class AppRoutingModule { }
