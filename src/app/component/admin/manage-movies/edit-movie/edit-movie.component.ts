import { UserEntity } from 'src/app/entity/user-entity';
import { MovieEntity } from 'src/app/entity/movie-entity';
import { MovieService } from 'src/app/service/data/movie.service';
import { Component, OnInit, ɵɵNgOnChangesFeature } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  id:number=0;
  movie:MovieEntity;

  constructor(private movieService:MovieService, private route:ActivatedRoute) {
    this.movie = new MovieEntity(0,"","",0,0,[]);
   }

  ngOnInit(): void {
    this.getQueryParam();
    this.getUser();
    console.log(`id number ${this.id}`);
  }


  getQueryParam(){

    this.route.queryParams.subscribe(
      (param:any) =>{
        this.id = param.id;
      })
  }

  getUser(){
    this.movieService.getMovie(this.id).subscribe(
      res => {
        console.log(res);
        this.movie = res as MovieEntity;
      }
    )
  }
}
