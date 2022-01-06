import { Component, OnInit } from '@angular/core';
import { MovieEntity } from 'src/app/entity/movie-entity';
import { MovieService } from 'src/app/service/data/movie.service';
import { ImageEntity } from 'src/app/entity/image-entity';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';





@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  private movies:MovieEntity[] = [];
  private image:[] = [];
  private imagePath:any;
  

  constructor(private movieService:MovieService, private _sanitizer: DomSanitizer, private route:Router) { }
  

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

    return response;

  }
  getImage(movie:MovieEntity){

  /*  let imagebaseStr= btoa(movie.images[0].image);
    this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
                 + imagebaseStr);

    console.log(this.imagePath);

    return this.imagePath;*/
    
    let imageEntity: Array<ImageEntity> = movie.images;
    let blobString = imageEntity[0].image;

    //console.log(blobString);
    var enc = new TextEncoder();
    let encodeToUint = enc.encode(blobString);
    let blob = new Blob([new Uint8Array(encodeToUint)], {type: 'image/jpg'});

    return this._sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blob));

  }

  gotoMovie(id:number){
    console.log("running goto movie");
    this.route.navigate([
      `/movies/${id}`
    ]);
  }

}
