import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieEntity } from 'src/app/entity/movie-entity';
import { MovieService } from 'src/app/service/data/movie.service';

@Component({
  selector: 'app-movie-description',
  templateUrl: './movie-description.component.html',
  styleUrls: ['./movie-description.component.css']
})
export class MovieDescriptionComponent implements OnInit {

 movie:MovieEntity;

  constructor(private movieService:MovieService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    console.log(id);

  
    this.movieService.getMovie(id).subscribe(
      response => this.getSuccessfulReponse(response)
    );
  }

  getSuccessfulReponse(response:any){
    this.movie = response;
  }

}
