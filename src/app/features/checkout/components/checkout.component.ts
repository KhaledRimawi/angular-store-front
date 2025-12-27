import { Component, OnInit, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CartService, OrderService } from '../../../core/services';
import { APP_CONSTANTS } from '../../../core/constants/app.constants';
import { CurrencyPipe } from '../../../shared/pipes';

/**
 * Checkout Component
 * Handles order form and payment information
 */
@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, CurrencyPipe],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent implements OnInit {
  // Form fields
  fullName = '';
  address = '';
  creditCard = '';

  // Cart info from service
  total!: Signal<number>;
  itemCount!: Signal<number>;

  // Validation constants
  readonly MIN_NAME = APP_CONSTANTS.VALIDATION.MIN_NAME_LENGTH;
  readonly MIN_ADDRESS = APP_CONSTANTS.VALIDATION.MIN_ADDRESS_LENGTH;
  readonly MIN_CARD = APP_CONSTANTS.VALIDATION.MIN_CARD_LENGTH;

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {
    // Initialize signals in constructor
    this.total = this.cartService.total;
    this.itemCount = this.cartService.itemCount;
  }

  ngOnInit(): void {
    // Redirect if cart is empty
    if (this.itemCount() === 0) {
      alert(APP_CONSTANTS.MESSAGES.CART_EMPTY);
      this.router.navigate([`/${APP_CONSTANTS.ROUTES.CART}`]);
    }
  }

  /**
   * Handle name change event
   */
  onNameChange(value: string): void {
    // You can add custom logic here if needed
    console.log('Name changed:', value);
  }

  /**
   * Handle address change event
   */
  onAddressChange(value: string): void {
    // You can add custom logic here if needed
    console.log('Address changed:', value);
  }

  /**
   * Handle credit card change event
   */
  onCardChange(value: string): void {
    // You can add custom logic here if needed
    console.log('Card changed:', value);
  }

  /**
   * Handle form submission
   */
  onSubmit(): void {
    // Create order
    this.orderService.createOrder(
      this.fullName,
      this.address,
      this.creditCard,
      this.total(),
      this.itemCount()
    );

    // Clear cart
    this.cartService.clearCart();

    // Navigate to confirmation
    this.router.navigate([`/${APP_CONSTANTS.ROUTES.CONFIRMATION}`]);
  }
}
