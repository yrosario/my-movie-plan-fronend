import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/auth/login/login.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './component/admin/admin.component';
import { ErrorComponent } from './component/error/error.component';
import { HeaderComponent } from './component/outline/header/header.component';
import { LogoutComponent } from './component/auth/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    ErrorComponent,
    HeaderComponent,
    LogoutComponent,
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
