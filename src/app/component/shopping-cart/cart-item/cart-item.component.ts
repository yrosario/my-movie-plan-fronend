import { MovieService } from './../../../service/data/movie.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: any;
  @Input() index:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
