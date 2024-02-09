import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product.model';
import { CartService } from '../../../services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems()
  }

  clearCart() {
    this.cartService.clearCart()
    this.cartItems = []
  }
}