import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { OrderInfo, maskCreditCard } from '../../../core/models';
import { OrderService } from '../../../core/services';
import { CurrencyPipe } from '../../../shared/pipes';
import { APP_CONSTANTS } from '../../../core/constants/app.constants';

/**
 * Confirmation Component
 * Displays order confirmation and details
 */
@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css',
})
export class ConfirmationComponent implements OnInit {
  orderInfo: OrderInfo | null = null;

  constructor(
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Retrieve order from service
    this.orderInfo = this.orderService.getLastOrder();

    // Redirect if no order found
    if (!this.orderInfo) {
      this.router.navigate([`/${APP_CONSTANTS.ROUTES.HOME}`]);
      return;
    }

    // Clear order after retrieving it
    this.orderService.clearOrder();
  }

  /**
   * Get masked credit card number for display
   */
  getMaskedCard(): string {
    return this.orderInfo ? maskCreditCard(this.orderInfo.creditCard) : '';
  }

  /**
   * Navigate back to shopping
   */
  continueShopping(): void {
    this.router.navigate([`/${APP_CONSTANTS.ROUTES.HOME}`]);
  }
}
