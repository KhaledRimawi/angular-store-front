import { Component, Signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../../core/services';
import { APP_CONSTANTS } from '../../../core/constants/app.constants';

/**
 * Header Component
 * Navigation bar with cart badge
 */
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  // Cart item count from service
  cartItemCount!: Signal<number>;
  
  // Routes
  readonly routes = APP_CONSTANTS.ROUTES;

  constructor(private cartService: CartService) {
    this.cartItemCount = this.cartService.itemCount;
  }
}
