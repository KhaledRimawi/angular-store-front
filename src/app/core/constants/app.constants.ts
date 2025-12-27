/**
 * Application-wide constants
 * Centralizes all magic strings and numbers for better maintainability
 */

export const APP_CONSTANTS = {
  // Storage keys
  STORAGE_KEYS: {
    CART: 'store_cart_items',
    ORDER: 'store_order_info',
  },

  // Validation rules
  VALIDATION: {
    MIN_NAME_LENGTH: 3,
    MIN_ADDRESS_LENGTH: 5,
    MIN_CARD_LENGTH: 10,
  },

  // Messages
  MESSAGES: {
    CART_EMPTY: 'Your cart is empty!',
    CART_CLEAR_CONFIRM: 'Are you sure you want to clear the cart?',
    PRODUCT_ADDED: (productName: string) => `${productName} added to cart!`,
    LOADING: 'Loading...',
    ERROR_LOAD_PRODUCTS: 'Failed to load products',
  },

  // Routes
  ROUTES: {
    HOME: '',
    PRODUCTS: '',
    CART: 'cart',
    CHECKOUT: 'checkout',
    CONFIRMATION: 'confirmation',
  },

  // API endpoints
  API: {
    PRODUCTS: '/assets/data.json',
  },
} as const;

/**
 * Currency formatting configuration
 */
export const CURRENCY_CONFIG = {
  CODE: 'USD',
  SYMBOL: '$',
  DECIMAL_PLACES: 2,
} as const;
