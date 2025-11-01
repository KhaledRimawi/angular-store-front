import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../../services/cart-service';

export interface OrderInfo {
  fullName: string;
  address: string;
  creditCard: string;
  total: number;
}

@Component({
  selector: 'app-checkout',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout implements OnInit {
  fullName = '';
  address = '';
  creditCard = '';
  total = 0;
  itemCount = 0;

  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.total = this.cartService.getTotal();
    this.itemCount = this.cartService.getItemCount();
    
    // Redirect to cart if empty
    if (this.itemCount === 0) {
      alert('Your cart is empty!');
      this.router.navigate(['/cart']);
    }
  }

  onSubmit(): void {
    // Validation
    if (!this.fullName || this.fullName.trim().length < 3) {
      alert('Please enter a valid full name (minimum 3 characters)');
      return;
    }

    if (!this.address || this.address.trim().length < 5) {
      alert('Please enter a valid address (minimum 5 characters)');
      return;
    }

    if (!this.creditCard || this.creditCard.trim().length < 10) {
      alert('Please enter a valid credit card number');
      return;
    }

    // Store order info and navigate to confirmation
    const orderInfo: OrderInfo = {
      fullName: this.fullName,
      address: this.address,
      creditCard: this.creditCard,
      total: this.total
    };

    // Store in session storage for confirmation page
    sessionStorage.setItem('orderInfo', JSON.stringify(orderInfo));

    // Clear cart
    this.cartService.clearCart();

    // Navigate to confirmation
    this.router.navigate(['/confirmation']);
  }
}
