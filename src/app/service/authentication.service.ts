import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(username: string, password: string):boolean {
    if (username === "test" && password == "test") {
      sessionStorage.setItem('authenticatedUuser', username);
      return true;
    } else {
      return false;
    }


  }

  isUserLoggedIN(){
    let user = sessionStorage.getItem("authenticatedUser");

    return !(user ===  null);
  }
}
