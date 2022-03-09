import { CART, USER } from './../../app.constants';
import { API_URL } from 'src/app/app.constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { CartEntity } from 'src/app/entity/cart-entity';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  cart:CartEntity[] = null;

  constructor(private http:HttpClient) { }

  private cartUrl = API_URL + "/" + CART + "/" + USER;

  retrieveCartFromServer(id:number):Observable<CartEntity[]>{

    
    return this.http
      .get<CartEntity[]>(this.cartUrl + "/"+id)
        .pipe(
          map(
            res=>{
              console.log("Cart info " + JSON.stringify(res));
              this.cart = res;
              return res;
            }
          )
        )
  }

  postToCartOnServer(userId:number, movieId:number){
    
    return this.http
      .post(this.cartUrl+"/"+userId,{"movieId":movieId})
      .pipe(
        map(
          res=>{
            console.log("Post to card response" + res);
          }
        )
      )
  }

  getCard(){
    return this.cart;
  }
}
