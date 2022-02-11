import { UserEntity } from './../../../../entity/user-entity';
import { UserService } from './../../../../service/data/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  constructor(private router:Router, private userSerive:UserService) {
   }

  ngOnInit(): void {
  }

  private user:UserEntity;

  registerUser()
  {
    this.userSerive.registerUser(this.user).subscribe(
      data =>
      {
        console.log("User post " + JSON.stringify(data) );
        this.router.navigate(['login']); 
      }
    );

  }

  setUser(username:string, email:string, fName:string, lName:string, address:string, city:string,
    birthday:string, password:string):void{

      
      this.user = new UserEntity(username, email, fName, lName, address, city,birthday,password);
      console.log(this.user);
      this.registerUser();
    }

}
