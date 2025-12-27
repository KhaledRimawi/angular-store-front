import { Component, OnInit, signal, computed, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { CartItem } from '../../../core/models';
import { CartService } from '../../../core/services';
import { CurrencyPipe } from '../../../shared/pipes';
import { APP_CONSTANTS } from '../../../core/constants/app.constants';

/**
 * Cart Component
 * Displays shopping cart with items and total
 */
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink, CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  // Reactive computed values from cart service
  cartItems!: Signal<readonly CartItem[]>;
  total!: Signal<number>;
  itemCount!: Signal<number>;
  isEmpty!: Signal<boolean>;

  constructor(
    private cartService: CartService,
    private router: Router
  ) {
    // Initialize signals in constructor
    this.cartItems = this.cartService.items;
    this.total = this.cartService.total;
    this.itemCount = this.cartService.itemCount;
    this.isEmpty = this.cartService.isEmpty;
  }

  ngOnInit(): void {
    // Component initialization if needed
  }

  /**
   * Calculate subtotal for a cart item
   */
  getSubtotal(item: CartItem): number {
    return item.price * item.quantity;
  }

  /**
   * Remove item from cart
   */
  removeItem(productId: number): void {
    this.cartService.removeFromCart(productId);
  }

  /**
   * Clear all items from cart with confirmation
   */
  clearCart(): void {
    if (confirm(APP_CONSTANTS.MESSAGES.CART_CLEAR_CONFIRM)) {
      this.cartService.clearCart();
    }
  }

  /**
   * Navigate to checkout page
   */
  proceedToCheckout(): void {
    if (this.isEmpty()) {
      alert(APP_CONSTANTS.MESSAGES.CART_EMPTY);
      return;
    }
    this.router.navigate([`/${APP_CONSTANTS.ROUTES.CHECKOUT}`]);
  }
}
