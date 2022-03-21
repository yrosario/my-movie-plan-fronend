import { UserEntity } from './../../../../entity/user-entity';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/data/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  id:number;
  user:UserEntity;

  constructor(private userService:UserService, private router:ActivatedRoute) {
    this.user = new UserEntity("","","","","","","","");
   }



  ngOnInit(): void {
    this.getQueryParam();
    

    console.log("Display id " + this. id);
  }

  addUser(){
    this.userService.registerUser(this.user).subscribe(
      res => {
        console.log("add new user " + JSON.stringify(res));
      }
    );
  }

  updateUser(){
    this.userService.updateUser(this.user).subscribe(
       res => {
          console.log("Update user service " + JSON.stringify(res)); 
       }
    )
  }

  getQueryParam(){

    if(this.id !== null){
        this.router.queryParams.subscribe(
          (param:any) =>{
            this.id = param.id;
            this.getUser();
          })
    }
  }

  getUser(){
    if(this.id != null){
      this.userService.retrieveUserById(this.id).subscribe(
        res => {
          this.user = res; 
          console.log("user info" + this.user);
        }
      )
    }
  }

}
