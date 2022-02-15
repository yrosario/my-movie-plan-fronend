import { Component, OnInit } from '@angular/core';
import { MovieEntity } from 'src/app/entity/movie-entity';
import { MovieService } from 'src/app/service/data/movie.service';
import { ImageEntity } from 'src/app/entity/image-entity';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  private movies:MovieEntity[] = [];
  private image:[] = [];

  constructor(private movieService:MovieService, private authenticationService:AuthenticationService,
              private router:Router) { }
  

  ngOnInit(): void {

    this.getMoviesfromServer();
    
  }

  getMoviesfromServer(){
    this.movieService.getMovies().subscribe(
      response => this.getSuccessfulReponse(response)
    );
  }


  getSuccessfulReponse(response: Array<MovieEntity>){
    console.log(response);
    console.log("running");
    this.movies = response;
  }

  getMovies():MovieEntity[]{
    return this.movies;
  }

  getImageFromServer(id:number){
    this.movieService.getImage(id).subscribe(
      response => this.successfulImageResponse(response)
    );
  }

  successfulImageResponse(response: any){
    this.image = response;

  }
  getImage(movie:MovieEntity){
    
    let imageEntity: Array<ImageEntity> = movie.images;
    let blobString = imageEntity[0].image;

    console.log(blobString);
    var enc = new TextEncoder();
    let encodeToUint = enc.encode(blobString);
    let blob = new Blob([new Uint8Array(encodeToUint)], {type: 'image/jpg'});

    let imgHref = URL.createObjectURL(blob);
    
    return imgHref;
    //return URL.createObjectURL(movie.images.);
  }

  //Add item to cart if user has logged in. Otherwise redirect to login page
  addToCart(){
    if(this.authenticationService.isUserLoggedIn()){
      return;
    }else{
      this.redirectToLogin();
    }
  }

  butMovie(){
    if(this.authenticationService.isUserLoggedIn()){
      return;
    }else{
      this.redirectToLogin();
    }
  }

  //If the user has not logged in redirect to login page
  redirectToLogin(): void{
    this.router.navigate(['login']);
  }

}
