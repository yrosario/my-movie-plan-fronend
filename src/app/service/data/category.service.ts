import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryEntity } from 'src/app/entity/category-entity';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  getCategories(){

    return this.http.get<CategoryEntity[]>("http://localhost:8081/movie/category");

  }

  getCategory(id:number){

    return this.http.get<CategoryEntity>(`http://localhost:8081/movie/category/${id}`);
  }
}
