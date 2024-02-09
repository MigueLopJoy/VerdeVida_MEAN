import { Injectable } from '@angular/core'
import { Product } from './../../models/product.model'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Product[] = []

  constructor() {
    const storedCartItems = localStorage.getItem('cartItems')
    if (storedCartItems) {
      this.cartItems = JSON.parse(storedCartItems)
    }
  }

  private updateLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
  }

  addToCart(product: any) {
    this.cartItems.push(product)
    this.updateLocalStorage()
  }

  getCartItems() {
    return this.cartItems
  }

  clearCart() {
    this.cartItems = []
    localStorage.removeItem('cartItems')
  }
}