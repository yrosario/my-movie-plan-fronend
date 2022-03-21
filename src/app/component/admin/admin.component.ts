import { map } from 'rxjs/operators';
import { MovieService } from 'src/app/service/data/movie.service';
import { Component, OnInit } from '@angular/core';
import { MovieEntity } from 'src/app/entity/movie-entity';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 
  movies:Array<MovieEntity> = [];

  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
  }

  getMovies(){
    this.movieService.getMovies().subscribe(
      res =>
          {
            this.movies = res;
          }
      );
  }

}
