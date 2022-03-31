import { MovieEntity } from 'src/app/entity/movie-entity';
import { MovieService } from 'src/app/service/data/movie.service';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/service/data/category.service';
import { CategoryEntity } from 'src/app/entity/category-entity';



@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  id:number=0;
  movie:MovieEntity;
  categories:Array<CategoryEntity>;

  constructor(private movieService:MovieService, private categoryService:CategoryService, private route:ActivatedRoute) {
    this.movie = new MovieEntity(0,null,"",0,0,null);
   }

  ngOnInit(): void {
    this.getQueryParam();
    this.getMovie();
    this.getCategories();
    console.log(`id number ${this.id}`);
  }


  getQueryParam(){

    this.movie.images = null;
    if(this.id !== null){
        this.route.queryParams.subscribe(
          (param:any) =>{
            this.id = param.id;
          })
    }
  }

  getMovie(){

    if(this.id != null){
        this.movieService.getMovie(this.id).subscribe(
          res => {
            console.log(res);
            this.movie = res as MovieEntity;
          }
        )
    }
  }

  addMovie(){

    console.log("Movie " + JSON.stringify(this.movie));
    this.movieService.addMovie(this.movie).subscribe();
  }

  updateMovie(){

    this.movieService.updateMovie(this.movie).subscribe();
  }

  getCategories(){

    this.categoryService.getCategories().subscribe(
      res => {
        this.categories = res;
      }
    )
  }

}
