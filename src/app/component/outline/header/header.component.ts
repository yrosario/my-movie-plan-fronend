import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router, private authenticationService:AuthenticationService ) { }

  ngOnInit(): void {
  }

  isUserLoggedIn(){
    console.log(this.authenticationService.isUserLoggedIn());
    return this.authenticationService.isUserLoggedIn();
  }
}
