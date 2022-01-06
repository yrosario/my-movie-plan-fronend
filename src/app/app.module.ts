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
import { HttpClientModule } from '@angular/common/http';
import { MovieListComponent } from './component/movie-list/movie-list.component';
import { MovieDescriptionComponent } from './component/movie-description/movie-description.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    ErrorComponent,
    HeaderComponent,
    LogoutComponent,
    MovieListComponent,
    MovieDescriptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
