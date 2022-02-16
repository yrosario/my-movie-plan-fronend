import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';
import { LoginComponent } from './component/auth/login/login.component';
import { RegistrationFormComponent } from './component/auth/login/registration-form/registration-form.component';
import { LogoutComponent } from './component/auth/logout/logout.component';
import { ErrorComponent } from './component/error/error.component';
import { MovieListComponent } from './component/movie-list/movie-list.component';

const routes: Routes = [
  { path:'', component: LoginComponent},
  { path:'login', component: LoginComponent},
  { path:'admin', component: AdminComponent},
  { path:'logout', component: LogoutComponent},
  { path: 'movies', component: MovieListComponent},
  { path: 'register', component: RegistrationFormComponent},
  { path: 'cart', component: ShoppingCartComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
