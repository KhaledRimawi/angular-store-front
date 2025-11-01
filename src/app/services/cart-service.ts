import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../model/product.model';

export interface ICartItem extends IProduct {
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems$ = new BehaviorSubject<ICartItem[]>([]);
  
  // Observable for components to subscribe to
  cart$ = this.cartItems$.asObservable();

  constructor() {}

  // Add product to cart
  addToCart(product: IProduct): void {
    const currentCart = this.cartItems$.value;
    const existingItem = currentCart.find(item => item.id === product.id);

    if (existingItem) {
      // Increase quantity if item already exists
      existingItem.quantity++;
      this.cartItems$.next([...currentCart]);
    } else {
      // Add new item with quantity 1
      const newItem: ICartItem = { ...product, quantity: 1 };
      this.cartItems$.next([...currentCart, newItem]);
    }
  }

  // Remove product from cart
  removeFromCart(productId: number): void {
    const currentCart = this.cartItems$.value;
    const updatedCart = currentCart.filter(item => item.id !== productId);
    this.cartItems$.next(updatedCart);
  }

  // Get all items in cart
  getItems(): ICartItem[] {
    return this.cartItems$.value;
  }

  // Calculate total price
  getTotal(): number {
    return this.cartItems$.value.reduce(
      (total, item) => total + (item.price * item.quantity), 
      0
    );
  }

  // Clear entire cart
  clearCart(): void {
    this.cartItems$.next([]);
  }

  // Get cart item count
  getItemCount(): number {
    return this.cartItems$.value.reduce((count, item) => count + item.quantity, 0);
  }
}
