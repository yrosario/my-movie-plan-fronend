import { UserEntity } from './../../entity/user-entity';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { API_URL, AUTHENTICATED_USER } from 'src/app/app.constants';
import {map} from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import jwt_decode from "jwt-decode";




@Injectable({
  providedIn: 'root'
})
export class UserService {

  private USERPATH = "user"
  user:UserEntity = null;

  constructor(private http:HttpClient) { }

  retrieveUser(username:string){
    console.log("retrieve user is executing");
    return this.http.get(`${API_URL}/${this.USERPATH}/us/${username}`)
      .pipe(
        map(
          res=>{
            this.user = res as UserEntity;
            sessionStorage.setItem("user", this.user.id.toString());
            console.log("Retrieve user " + JSON.stringify(this.user));

            catchError(this.handleError);
          }
        )
      )
  }

  
  retrieveUserById(id:number){
    return this.http.get<UserEntity>(`${API_URL}/${this.USERPATH}/${id}`);
  }

  updateUser(user:UserEntity){
    return this.http.put(`${API_URL}/${this.USERPATH}/update`, user);
  }




  registerUser(user:UserEntity){
    return this.http.post(`${API_URL}/${this.USERPATH}/register`,user, {observe: 'response', responseType: 'text'})
      .pipe(
        map(
          res =>{
            catchError(this.handleError);
          })

      );

  }

deletUser(id:number){

  return this.http.delete(`${API_URL}/${this.USERPATH}/${id}`);
}

retrieveUsers(){

  return this.http.get<UserEntity[]>(`${API_URL}/user/list`);
}

  //Stored user in local session storage
  setUser(){
    let decoded = this.getDecodeAccesstoken();


    if(decoded.sub){
      sessionStorage.setItem("username", decoded.sub);
    }
  }

  //get user from local session storage
  getUser(){
    return this.user;
  }

  getDecodeAccesstoken():any{
    let token:string = sessionStorage.getItem(AUTHENTICATED_USER);
    if(token === null) return {sub:"error"};

    token = token.substring(7, token.length);
    console.log("token " + token);
    try{
      return jwt_decode(token);
    }catch(Error){
      console.log("token returning null");
      return null;
    };
    
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


