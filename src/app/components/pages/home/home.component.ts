import { Component } from '@angular/core';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FeaturedProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
