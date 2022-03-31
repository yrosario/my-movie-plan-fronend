import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MovieEntity } from 'src/app/entity/movie-entity';
import { MovieService } from 'src/app/service/data/movie.service';
import { CategoryService } from 'src/app/service/data/category.service';
import { CategoryEntity } from 'src/app/entity/category-entity';


@Component({
  selector: 'app-manage-movies',
  templateUrl: './manage-movies.component.html',
  styleUrls: ['./manage-movies.component.css']
})
export class ManageMoviesComponent implements OnInit {
  movies:Array<MovieEntity> = [];
  categories:Array<CategoryEntity> = [];

  constructor(private movieService:MovieService, private categoryService:CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.getMovies();
    this.getCategories();
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

  getCategories(){

    this.categoryService.getCategories().subscribe(
      res => {
        this.categories = res;
        console.log("Category response " + JSON.stringify(res));
      }
      )
  }

}
