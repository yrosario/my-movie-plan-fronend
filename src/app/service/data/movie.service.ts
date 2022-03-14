import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MovieEntity } from 'src/app/entity/movie-entity';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

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

  getMovie(id:number):Observable<MovieEntity>{
    return this.httpClient.get<MovieEntity>(`http://localhost:8081/movie/${id}`)
    .pipe(
      map(res => {
        console.log("movie " + res);
        return res;
      })
    );
  }

  deleteMovie(id:number){

    return this.httpClient.delete(`http://localhost:8081/movie/${id}`);
  }

  addMovie(movie:MovieEntity){

    let headers_object = new HttpHeaders().set("Authorization", sessionStorage.getItem("authenticatedUser"));
    headers_object.set('Content-Type', 'application/x-www-form-urlencoded');
    
    return this.httpClient.post("http://localhost:8081/movie/add", movie, {headers:headers_object});
  }
}
