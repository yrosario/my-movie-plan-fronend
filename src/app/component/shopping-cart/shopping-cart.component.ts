import { CartEntity } from './../../entity/cart-entity';
import { CartService } from './../../service/data/cart.service';
import { UserService } from './../../service/data/user.service';
import { MovieService } from './../../service/data/movie.service';
import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/service/shared/messenger.service';



@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartItems:CartEntity[] = [];

  cartTotal = 0;

  constructor(private movieService:MovieService, private msgService:MessengerService, 
              private userService:UserService, private cartService:CartService) { }

  
  ngOnInit(): void {

    if(this.cartItems.length == 0)( this.cartTotal = 0);
    
    this.msgService.getMsg().subscribe( (movie) => {
      this.cartItems.push(movie as CartEntity);
    });

    //
    console.log("user id + " + this.userService.getUser());
    let userId:number = +sessionStorage.getItem("user");
    this.cartService.retrieveCartFromServer(userId)
      .subscribe(
        data => {
          console.log("getting card" +data);
          this.cartItems = data;
          //this.cartService.getCard().forEach(item=>{this.cartItems.push(item);});
          this.calculateSum();
        } 
      )

      this.cartTotal = 0;
      

  }

  calculateSum(){
    for(let item of this.cartItems){
      this.cartTotal += item.movie.price;
    }
  }

  removeItemFromCart(productId:number){
    let userId:number = +sessionStorage.getItem("user");
    this.cartService.deleteFromCartOnServer(userId, productId)
      .subscribe(
        data=>{
          this.removeItemFromCart(userId);
        }
      )
    
      this.removeItem(productId);
  }

  removeItem(productId:number){
    console.log(`remove item clicked #${productId}`);
      for(let i = 0; i < this.cartItems.length; i++){
        if(this.cartItems[i].id === productId){
          console.log(`Within if condition: ${i} and ${productId}`);
          this.cartTotal -= this.cartItems[i].movie.price;
          this.cartItems.splice(i,1);
          break;
        }
      }
    console.log(this.cartItems);
  }

  getUserCart(){
    //this.userService.getUser();
  }

}
