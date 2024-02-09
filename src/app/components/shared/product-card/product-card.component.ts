import { Component, Input } from '@angular/core';
import { Product } from '../../../models/product.model';
import { CartService } from '../../../services/cart/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!: Product

  constructor(private cartService: CartService) { }

  addToCart() {
    this.cartService.addToCart(this.product);
  }
}