import { Component, input, output } from '@angular/core';
import { Product } from '../../../../core/models';
import { CurrencyPipe } from '../../../../shared/pipes';

/**
 * Product Item Component
 * Displays individual product card with add-to-cart functionality
 */
@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  // Modern signal-based inputs (Angular 17+)
  product = input.required<Product>();
  
  // Modern signal-based outputs
  addToCart = output<Product>();

  /**
   * Handle add to cart button click
   */
  onAddToCart(): void {
    this.addToCart.emit(this.product());
  }
}
