import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { UserComponent} from './user.component'

const routes:Routes=[
 {path:'',component:UserComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule],
  declarations: [UserComponent]
})
export class UserModule { }
