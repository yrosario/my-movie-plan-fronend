import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MovieEntity } from 'src/app/entity/movie-entity';
import { MovieService } from 'src/app/service/data/movie.service';

@Component({
  selector: 'app-manage-movies',
  templateUrl: './manage-movies.component.html',
  styleUrls: ['./manage-movies.component.css']
})
export class ManageMoviesComponent implements OnInit {
  movies:Array<MovieEntity> = [];

  constructor(private movieService:MovieService, private router: Router) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(){
    this.movieService.getMovies().subscribe(
      res =>
          {
            this.movies = res;
            console.log("res => " + res);
          }
      );
  }

  editMovie(userId?:number){

    
    this.router.navigate(["/manage-movies/edit"],{queryParams:{id:userId}});
  }

  deleteMovie(id:number){
    this.movieService.deleteMovie(id).subscribe(
      res=>{
        console.log("Object deleted");
      }
    )

    this.removeMovieFromList(id);
  }

  removeMovieFromList(id:number){
    for(let i = 0; i < this.movies.length; i++){
      if(this.movies[i].id == id){
        this.movies.splice(i,i);
      }
    }
  }


}
