import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { OrderInfo } from '../checkout/checkout';

@Component({
  selector: 'app-confirmation',
  imports: [CommonModule, RouterLink],
  templateUrl: './confirmation.html',
  styleUrl: './confirmation.css',
})
export class Confirmation implements OnInit {
  orderInfo: OrderInfo | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const storedOrder = sessionStorage.getItem('orderInfo');
    
    if (storedOrder) {
      this.orderInfo = JSON.parse(storedOrder);
      // Clear the order info from session storage
      sessionStorage.removeItem('orderInfo');
    } else {
      // No order info, redirect to home
      this.router.navigate(['/']);
    }
  }

  goBackToShopping(): void {
    this.router.navigate(['/']);
  }
}
