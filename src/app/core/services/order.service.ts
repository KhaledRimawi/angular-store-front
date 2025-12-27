import { Injectable } from '@angular/core';
import { OrderInfo, createOrder } from '../models';
import { APP_CONSTANTS } from '../constants/app.constants';
import { SessionStorageService } from './storage.service';

/**
 * Service for managing order operations
 * Handles order creation and persistence
 */
@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private sessionStorage: SessionStorageService) {}

  /**
   * Create and save an order
   */
  createOrder(
    fullName: string,
    address: string,
    creditCard: string,
    totalAmount: number,
    totalItems: number
  ): OrderInfo {
    const order = createOrder(fullName, address, creditCard, totalAmount, totalItems);
    this.saveOrder(order);
    return order;
  }

  /**
   * Save order to session storage
   */
  private saveOrder(order: OrderInfo): void {
    this.sessionStorage.setItem(APP_CONSTANTS.STORAGE_KEYS.ORDER, order);
  }

  /**
   * Retrieve the last order from session storage
   */
  getLastOrder(): OrderInfo | null {
    return this.sessionStorage.getItem<OrderInfo>(APP_CONSTANTS.STORAGE_KEYS.ORDER);
  }

  /**
   * Clear order from session storage
   */
  clearOrder(): void {
    this.sessionStorage.removeItem(APP_CONSTANTS.STORAGE_KEYS.ORDER);
  }

  /**
   * Check if there's a pending order
   */
  hasOrder(): boolean {
    return this.getLastOrder() !== null;
  }
}
