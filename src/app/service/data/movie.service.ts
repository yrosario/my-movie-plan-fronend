import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieEntity } from 'src/app/entity/movie-entity';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
  }

  getMovies(){
    return this.httpClient.get<MovieEntity[]>("http://localhost:8081/movie/list");
   
  }

  getImage(id:number){
    return this.httpClient.get(`http://movie/${id}/img`);
  }
}
