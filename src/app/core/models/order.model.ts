/**
 * Order information submitted at checkout
 */
export interface OrderInfo {
  readonly fullName: string;
  readonly address: string;
  readonly creditCard: string;
  readonly totalAmount: number;
  readonly totalItems: number;
  readonly orderDate: Date;
}

/**
 * Create an order from checkout form data
 */
export function createOrder(
  fullName: string,
  address: string,
  creditCard: string,
  totalAmount: number,
  totalItems: number
): OrderInfo {
  return {
    fullName: fullName.trim(),
    address: address.trim(),
    creditCard: creditCard.trim(),
    totalAmount,
    totalItems,
    orderDate: new Date(),
  };
}

/**
 * Mask credit card number for display
 */
export function maskCreditCard(cardNumber: string): string {
  if (cardNumber.length <= 4) {
    return cardNumber;
  }
  const lastFour = cardNumber.slice(-4);
  const masked = '*'.repeat(cardNumber.length - 4);
  return `${masked}${lastFour}`;
}
