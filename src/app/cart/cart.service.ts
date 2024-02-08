import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private cartItemsSubject = new BehaviorSubject<string[]>([])
  cartItems$ = this.cartItemsSubject.asObservable()

  addToCart(product: string) {
    const currentCart = this.cartItemsSubject.value
    currentCart.push(product)
    this.cartItemsSubject.next(currentCart)
  }
}
