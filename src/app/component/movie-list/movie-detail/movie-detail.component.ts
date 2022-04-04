import { MessengerService } from './../../../service/shared/messenger.service';
import { AuthenticationService } from './../../../service/authentication.service';
import { CartService } from './../../../service/data/cart.service';
import { MovieEntity } from './../../../entity/movie-entity';
import { MovieService } from './../../../service/data/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  id:string;
  movie:MovieEntity;

  constructor(private route: ActivatedRoute, private movieService:MovieService,
    private cartService:CartService, private authenticationService:AuthenticationService,
    private msgService:MessengerService, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getMovie();
  }

  getMovie(){
    let idNum:number = +this.id;

    this.movieService.getMovie(idNum).subscribe(
      res => {
        this.movie = res;
      }
    )
  }


  addToCart(){

    let userId:number = +sessionStorage.getItem("user");
    this.cartService.postToCartOnServer(userId,this.movie.id).subscribe(
      ()=>{
        if(this.authenticationService.isUserLoggedIn()){
          this.msgService.sendMsg(this.movie);
        }else{
          this.redirectToLogin();
        }
      }
    )

  }

  buyMovie(){

  }

  redirectToLogin(): void{
    this.router.navigate(['login']);
  }

}
