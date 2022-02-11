import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { API_URL } from 'src/app/app.constants';
import { UserEntity } from 'src/app/entity/user-entity';
import {map} from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private USERPATH = "user"

  constructor(private http:HttpClient) { }

  registerUser(user:UserEntity){


    return this.http.post(`${API_URL}/${this.USERPATH}/register`,user, {observe: 'response', responseType: 'text'})
      .pipe(
        map(
          res =>{
            catchError(this.handleError);
          })

      );

  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  
}
