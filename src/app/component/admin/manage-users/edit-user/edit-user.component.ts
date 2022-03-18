import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserEntity } from 'src/app/entity/user-entity';
import { UserService } from 'src/app/service/data/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private userService:UserService, private router:ActivatedRoute) { }

  id:number;
  user:UserEntity;

  ngOnInit(): void {
    this.getQueryParam();
    this.getUser();

    console.log("Display id " + this. id);
  }

  addUser(){
    console.log(this.user);
  }

  updateUser(){
    console.log(this.user);
  }

  getQueryParam(){

    if(this.id !== null){
        this.router.queryParams.subscribe(
          (param:any) =>{
            this.id = param.id;
          })
    }
  }

  getUser(){
    if(this.id != null){
      this.userService.retrieveUserById(this.id).subscribe(
        res => {
          this.user = res; 
          console.log(this.user);
        }
      )
    }
  }

}
