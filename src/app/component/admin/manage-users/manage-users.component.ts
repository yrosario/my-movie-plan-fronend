import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieEntity } from 'src/app/entity/movie-entity';
import { UserEntity } from 'src/app/entity/user-entity';
import { UserService } from 'src/app/service/data/user.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {

  id:number;
  users:Array<UserEntity> = [];

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    this.retrieveUsers();
  }

  retrieveUsers(){
    this.userService.retrieveUsers().subscribe(
      res => {
        console.log("users " + JSON.stringify(res));
        this.users = res;
      }
    )
  }

  editUser(userId?:number){
       this.router.navigate(["/manage-user/edit-user"],{queryParams:{id:userId}});
  }




}
