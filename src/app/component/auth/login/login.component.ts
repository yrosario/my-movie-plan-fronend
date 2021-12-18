import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
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

  constructor(private router: Router, private authenticationService:AuthenticationService) { }

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

}
