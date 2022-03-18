import { UserService } from './../../../service/data/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username='test';
  password = "test";
  invalidLogin = false;

  constructor(private router: Router, private authenticationService:AuthenticationService, private userService:UserService) { }

  ngOnInit(): void {

  }

  public handleLogin(){
    if(this.authenticationService.authenticate(this.username,this.password)){
        this.invalidLogin = false;
        this.router.navigate(['admin']); 
    }else{
        this.invalidLogin = true;
    }
    
  }


  public handleJWTLogin(){
    console.log("handle");
    this.authenticationService.executeJWTAuthenticationService(this.username,this.password)
    .subscribe(
      data => {
        console.log("JWT Login \n" + data);
        this.invalidLogin = false;
        this.getFromServer();
        this.router.navigate(['movies']); 
      },
      error => {
        console.log(error);
        this.invalidLogin = true;
      }
    )
    }

    getFromServer(){

    console.log("test");
    this.userService.setUser();

    let username = sessionStorage.getItem("username");
    console.log("running user retrieval " + username);
    this.userService.retrieveUser(username)
      .subscribe(
        data => {
          console.log("Data " + data );
        }
      )
    
  }
    

}
