/**
 * Product model representing an item in the store catalog
 */
export interface Product {
  readonly id: number;
  readonly name: string;
  readonly price: number;
  readonly url: string;
  readonly description: string;
}

/**
 * Type guard to check if an object is a valid Product
 */
export function isProduct(obj: unknown): obj is Product {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'id' in obj &&
    typeof obj.id === 'number' &&
    'name' in obj &&
    typeof obj.name === 'string' &&
    'price' in obj &&
    typeof obj.price === 'number' &&
    'url' in obj &&
    typeof obj.url === 'string' &&
    'description' in obj &&
    typeof obj.description === 'string'
  );
}

/**
 * Helper to validate product price
 */
export function isValidPrice(price: number): boolean {
  return price > 0 && isFinite(price);
}
