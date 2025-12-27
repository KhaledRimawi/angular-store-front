import { Routes } from '@angular/router';
import { APP_CONSTANTS } from './core/constants/app.constants';

/**
 * Application Routes
 * Using lazy loading for better performance
 */
export const routes: Routes = [
  {
    path: APP_CONSTANTS.ROUTES.HOME,
    loadComponent: () =>
      import('./features/products/components/product-list.component').then(
        (m) => m.ProductListComponent
      ),
  },
  {
    path: APP_CONSTANTS.ROUTES.CART,
    loadComponent: () =>
      import('./features/cart/components/cart.component').then((m) => m.CartComponent),
  },
  {
    path: APP_CONSTANTS.ROUTES.CHECKOUT,
    loadComponent: () =>
      import('./features/checkout/components/checkout.component').then(
        (m) => m.CheckoutComponent
      ),
  },
  {
    path: APP_CONSTANTS.ROUTES.CONFIRMATION,
    loadComponent: () =>
      import('./features/checkout/components/confirmation.component').then(
        (m) => m.ConfirmationComponent
      ),
  },
  {
    path: '**',
    redirectTo: APP_CONSTANTS.ROUTES.HOME,
  },
];
