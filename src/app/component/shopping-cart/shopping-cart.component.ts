import { MovieService } from './../../service/data/movie.service';
import { MovieEntity } from 'src/app/entity/movie-entity';
import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/service/shared/messenger.service';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartItems:Array<MovieEntity>= [
  ];

  cartTotal = 0;

  constructor(private movieService:MovieService, private msgService:MessengerService) { }

  
  ngOnInit(): void {

    this.msgService.getMsg().subscribe( movie => {
      this.cartItems.push(movie as MovieEntity);

      this.cartItems.forEach((item: { price: number; }) => {
        this.cartTotal += item.price;  
      });
    })


  }

}
