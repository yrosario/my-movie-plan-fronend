import { MovieDetailComponent } from './component/movie-list/movie-detail/movie-detail.component';
import { ManageMoviesComponent } from './component/admin/manage-movies/manage-movies.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';
import { LoginComponent } from './component/auth/login/login.component';
import { RegistrationFormComponent } from './component/auth/login/registration-form/registration-form.component';
import { LogoutComponent } from './component/auth/logout/logout.component';
import { ErrorComponent } from './component/error/error.component';
import { MovieListComponent } from './component/movie-list/movie-list.component';
import { EditMovieComponent } from './component/admin/manage-movies/edit-movie/edit-movie.component';
import { ManageUsersComponent } from './component/admin/manage-users/manage-users.component';
import { EditUserComponent } from './component/admin/manage-users/edit-user/edit-user.component';

const routes: Routes = [
  { path:'', component: LoginComponent},
  { path:'login', component: LoginComponent},
  { path:'admin', component: AdminComponent},
  { path:'logout', component: LogoutComponent},
  { path: 'movies', component: MovieListComponent},
  { path: 'register', component: RegistrationFormComponent},
  { path: 'cart', component: ShoppingCartComponent},
  { path: 'manage-movies', component: ManageMoviesComponent},
  { path: 'manage-movies/edit', component: EditMovieComponent},
  { path: 'manage-users', component: ManageUsersComponent},
  { path: 'manage-user/edit-user', component: EditUserComponent},
  { path: 'movies/movie-detail/:id', component: MovieDetailComponent}

  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
