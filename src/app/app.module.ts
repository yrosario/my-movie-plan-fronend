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
import { RegistrationFormComponent } from './component/auth/login/registration-form/registration-form.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { CartItemComponent } from './component/shopping-cart/cart-item/cart-item.component';
import {MatIconModule} from '@angular/material/icon';
import { ManageMoviesComponent } from './component/admin/manage-movies/manage-movies.component';
import { EditMovieComponent } from './component/admin/manage-movies/edit-movie/edit-movie.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    ErrorComponent,
    HeaderComponent,
    LogoutComponent,
    MovieListComponent,
    RegistrationFormComponent,
    ShoppingCartComponent,
    CartItemComponent,
    ManageMoviesComponent,
    EditMovieComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
