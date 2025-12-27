import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductService, CartService } from '../../../../core/services';
import { Product } from '../../../../core/models';
import { CurrencyPipe } from '../../../../shared/pipes';
import { APP_CONSTANTS } from '../../../../core/constants/app.constants';

/**
 * Product Detail Component
 * Displays detailed information about a single product
 */
@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  product = signal<Product | null>(null);
  isLoading = signal(true);
  errorMessage = signal('');
  quantity = signal(1);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadProduct(+id);
    } else {
      this.router.navigate(['/']);
    }
  }

  /**
   * Load product by ID
   */
  private loadProduct(id: number): void {
    this.isLoading.set(true);
    this.productService.getProductById(id).subscribe({
      next: (product) => {
        if (product) {
          this.product.set(product);
        } else {
          this.errorMessage.set('Product not found');
        }
        this.isLoading.set(false);
      },
      error: (error) => {
        console.error('Error loading product:', error);
        this.errorMessage.set(APP_CONSTANTS.MESSAGES.ERROR_LOAD_PRODUCTS);
        this.isLoading.set(false);
      },
    });
  }

  /**
   * Increase quantity
   */
  increaseQuantity(): void {
    this.quantity.update((q) => q + 1);
  }

  /**
   * Decrease quantity
   */
  decreaseQuantity(): void {
    if (this.quantity() > 1) {
      this.quantity.update((q) => q - 1);
    }
  }

  /**
   * Add product to cart with selected quantity
   */
  addToCart(): void {
    const product = this.product();
    if (product) {
      for (let i = 0; i < this.quantity(); i++) {
        this.cartService.addToCart(product);
      }
      alert(`${this.quantity()} x ${product.name} added to cart!`);
      this.quantity.set(1);
    }
  }

  /**
   * Navigate back to products
   */
  goBack(): void {
    this.router.navigate(['/']);
  }
}
