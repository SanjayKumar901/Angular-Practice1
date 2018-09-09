import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthGuardGuard } from './Services/auth-guard.guard';
import { AuthService } from './Services/authentication/auth.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [AuthGuardGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
