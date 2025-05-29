import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  // Add any properties or methods needed for the product card functionality
  product = {
    name: 'Sample Product',
    price: 29.99,
    description: 'This is a sample product description.',
    imageUrl: 'https://www.grillhouse.mx/cdn/shop/files/cheetosfh.png?v=1707850509'
  };

  addToCart() {
    console.log(`${this.product.name} added to cart.`);
  }

}
