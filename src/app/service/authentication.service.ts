import { API_URL, AUTHENTICATED_USER } from '../app.constants';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

export const USERNAME = 'username'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public token: string;

  constructor(private http: HttpClient) { 
    this.token = null;
  }

  login(username:string, password:string): Observable<HttpErrorResponse | HttpResponse<any>> {
    return this.http.post<HttpErrorResponse | HttpResponse<any>>
      (`${API_URL}/login`, {"username":username, "password":password}, {observe: 'response'});

  }


  isUserLoggedIn(){
    let user = sessionStorage.getItem(AUTHENTICATED_USER);

    return !(user === null);
  }

  logoff(){
    this.token = null;
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem("username");
  }

  saveToken(token: string): void{
    this.token = token;
    localStorage.setItem(AUTHENTICATED_USER, token);
  }

  loadToken(): void{
    this.token = localStorage.getItem('token');
  }

  getToken(): string {
    return this.token;
  }

  executeJWTAuthenticationService(username: string, password: string){
    
    //console.log("ExecuteJWTAuthentication is running");
    //console.log("url " + `${API_URL}/login`);

    let body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);

    //console.log("body " + body);
    return this.http.post<any>(
      `${API_URL}/login`,body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }).pipe(
        map(
          data => {
            for(const key in data){
              console.log("key " + data[key] + " ");
            }
            sessionStorage.setItem(USERNAME, username);
            sessionStorage.setItem(AUTHENTICATED_USER , `Bearer ${data.access_token}` );
            return data;
          }
        )
      );
  }

  authenticate(username: string, password: string):boolean {
    if (username === "test" && password == "test") {
      sessionStorage.setItem('authenticatedUuser', username);
      return true;
    } else {
      return false;
    }


  }
}
