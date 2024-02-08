import { Component, OnInit } from '@angular/core';
import { FeaturedProductsService } from './featured-products.service';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.css'
})
export class FeaturedProductsComponent implements OnInit {
  products: any[] = []

  constructor(private featuredProductsService: FeaturedProductsService) {}

  ngOnInit(): void {
      this.featuredProductsService.getProducts().subscribe(
          (products: any[]) => {this.products = products},
          )
  }
} 
