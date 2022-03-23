import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RoleEnty } from 'src/app/entity/role-entity';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http:HttpClient) { }

  getRoles(){

    return this.http.get<RoleEnty[]>('http://localhost:8081/user/role');
  }
}
