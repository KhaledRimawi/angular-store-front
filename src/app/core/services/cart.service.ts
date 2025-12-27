import { Injectable, signal, computed } from '@angular/core';
import { Product, CartItem, createCartItem, calculateCartTotal, calculateItemCount } from '../models';
import { APP_CONSTANTS } from '../constants/app.constants';
import { StorageService } from './storage.service';

/**
 * Enhanced Cart Service with improved state management
 * Uses Angular signals for reactive state and localStorage persistence
 */
@Injectable({
  providedIn: 'root',
})
export class CartService {
  // Reactive signals for cart state
  private readonly cartItemsSignal = signal<CartItem[]>([]);

  // Public computed signals
  readonly items = this.cartItemsSignal.asReadonly();
  readonly total = computed(() => calculateCartTotal(this.cartItemsSignal()));
  readonly itemCount = computed(() => calculateItemCount(this.cartItemsSignal()));
  readonly isEmpty = computed(() => this.cartItemsSignal().length === 0);

  constructor(private storageService: StorageService) {
    this.loadCartFromStorage();
  }

  /**
   * Add product to cart
   * If product exists, increment quantity; otherwise add new item
   */
  addToCart(product: Product): void {
    const currentCart = this.cartItemsSignal();
    const existingItemIndex = currentCart.findIndex(item => item.id === product.id);

    if (existingItemIndex !== -1) {
      // Product exists - increment quantity
      const updatedCart = [...currentCart];
      updatedCart[existingItemIndex] = {
        ...updatedCart[existingItemIndex],
        quantity: updatedCart[existingItemIndex].quantity + 1,
      };
      this.cartItemsSignal.set(updatedCart);
    } else {
      // New product - add to cart
      const newItem = createCartItem(product);
      this.cartItemsSignal.set([...currentCart, newItem]);
    }

    this.saveCartToStorage();
  }

  /**
   * Remove product from cart by ID
   */
  removeFromCart(productId: number): void {
    const updatedCart = this.cartItemsSignal().filter(item => item.id !== productId);
    this.cartItemsSignal.set(updatedCart);
    this.saveCartToStorage();
  }

  /**
   * Update quantity for a specific product
   */
  updateQuantity(productId: number, quantity: number): void {
    if (quantity <= 0) {
      this.removeFromCart(productId);
      return;
    }

    const currentCart = this.cartItemsSignal();
    const itemIndex = currentCart.findIndex(item => item.id === productId);

    if (itemIndex !== -1) {
      const updatedCart = [...currentCart];
      updatedCart[itemIndex] = {
        ...updatedCart[itemIndex],
        quantity: Math.max(1, quantity),
      };
      this.cartItemsSignal.set(updatedCart);
      this.saveCartToStorage();
    }
  }

  /**
   * Clear all items from cart
   */
  clearCart(): void {
    this.cartItemsSignal.set([]);
    this.saveCartToStorage();
  }

  /**
   * Get cart items as array (for compatibility)
   */
  getItems(): CartItem[] {
    return this.cartItemsSignal();
  }

  /**
   * Get total price (for compatibility)
   */
  getTotal(): number {
    return this.total();
  }

  /**
   * Get item count (for compatibility)
   */
  getItemCount(): number {
    return this.itemCount();
  }

  /**
   * Load cart from localStorage on initialization
   */
  private loadCartFromStorage(): void {
    const savedCart = this.storageService.getItem<CartItem[]>(APP_CONSTANTS.STORAGE_KEYS.CART);
    if (savedCart && Array.isArray(savedCart)) {
      this.cartItemsSignal.set(savedCart);
    }
  }

  /**
   * Save current cart state to localStorage
   */
  private saveCartToStorage(): void {
    this.storageService.setItem(APP_CONSTANTS.STORAGE_KEYS.CART, this.cartItemsSignal());
  }
}
