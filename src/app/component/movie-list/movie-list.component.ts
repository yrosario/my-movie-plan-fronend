import { ImageService } from './../../service/data/image.service';
import { UserService } from './../../service/data/user.service';
import { CartService } from './../../service/data/cart.service';
import { Component, OnInit} from '@angular/core';
import { MovieEntity } from 'src/app/entity/movie-entity';
import { MovieService } from 'src/app/service/data/movie.service';
import { ImageEntity } from 'src/app/entity/image-entity';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { Router } from '@angular/router';
import { MessengerService } from 'src/app/service/shared/messenger.service';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  private movies:MovieEntity[] = [];
  images:{id:string, content:any}[] = [];

  constructor(private movieService:MovieService, private authenticationService:AuthenticationService,
              private router:Router, private msgService:MessengerService,
              private cartService:CartService, private userService:UserService,
              private imageService:ImageService) { }
  

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
    this.loadImages();
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
    this.images = response;

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
  addToCart(movie:MovieEntity){

    let userId:number = +sessionStorage.getItem("user");
    this.cartService.postToCartOnServer(userId,movie.id).subscribe(
      ()=>{
        if(this.authenticationService.isUserLoggedIn()){
          this.msgService.sendMsg(movie);
        }else{
          this.redirectToLogin();
        }
      }
    )

  }

  //Buy movie, otherwise redirect to login page
  buyMovie(){
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

  createImageFromBlob(image: Blob, id:string) {
    let reader = new FileReader();
    reader.addEventListener("load", () => { 
       this.images.push({id:id, content:reader.result});
    }, false);
 
    if (image) {
       reader.readAsDataURL(image);
    }
 }

 getImageFromService(id:number) {
  this.imageService.getImage(id).subscribe(data => {
    this.createImageFromBlob(data,id.toString());
  }, error => {
    console.log(error);
  });

  
}

findImage(id:any){
  console.log("id " +  id);
  for(let image of this.images){

    console.log(Object.keys(image));
    if(image.id == id){
      return image.content;
    }
  }

  console.log("could not find image");
  return null;
}

loadImages(){
  for(let movie of this.movies){
    this.getImageFromService(movie.id);
  }
}


}
