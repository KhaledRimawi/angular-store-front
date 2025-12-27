import { Product } from './product.model';

/**
 * Cart item extends Product with quantity information
 */
export interface CartItem extends Product {
  quantity: number;
}

/**
 * Cart state interface
 */
export interface CartState {
  readonly items: ReadonlyArray<CartItem>;
  readonly total: number;
  readonly itemCount: number;
}

/**
 * Helper function to create a cart item from a product
 */
export function createCartItem(product: Product, quantity: number = 1): CartItem {
  return {
    ...product,
    quantity: Math.max(1, quantity),
  };
}

/**
 * Helper function to calculate item subtotal
 */
export function calculateItemSubtotal(item: CartItem): number {
  return item.price * item.quantity;
}

/**
 * Helper function to calculate cart total
 */
export function calculateCartTotal(items: ReadonlyArray<CartItem>): number {
  return items.reduce((total, item) => total + calculateItemSubtotal(item), 0);
}

/**
 * Helper function to calculate total item count
 */
export function calculateItemCount(items: ReadonlyArray<CartItem>): number {
  return items.reduce((count, item) => count + item.quantity, 0);
}
