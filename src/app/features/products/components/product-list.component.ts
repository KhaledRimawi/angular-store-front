import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../core/models';
import { ProductService, CartService } from '../../../core/services';
import { APP_CONSTANTS } from '../../../core/constants/app.constants';
import { ProductItemComponent } from './product-item/product-item.component';

/**
 * Product List Component
 * Displays catalog of products with loading and error states
 */
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  // Reactive signals
  products = signal<Product[]>([]);
  isLoading = signal(true);
  errorMessage = signal<string | null>(null);

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  /**
   * Load products from service
   */
  private loadProducts(): void {
    this.isLoading.set(true);
    this.errorMessage.set(null);

    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products.set(products);
        this.isLoading.set(false);
      },
      error: (error) => {
        console.error('Error loading products:', error);
        this.errorMessage.set(APP_CONSTANTS.MESSAGES.ERROR_LOAD_PRODUCTS);
        this.isLoading.set(false);
      },
    });
  }

  /**
   * Handle add to cart event from product item
   */
  onAddToCart(product: Product): void {
    this.cartService.addToCart(product);
    this.showNotification(APP_CONSTANTS.MESSAGES.PRODUCT_ADDED(product.name));
  }

  /**
   * Show notification to user
   */
  private showNotification(message: string): void {
    // Using simple alert for now - could be replaced with toast notification
    alert(message);
  }
}
