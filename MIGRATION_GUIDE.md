# Migration Guide: Old vs New Structure

## File Mapping: Where Things Moved

### Models
```
OLD → NEW
src/app/model/product.model.ts → src/app/core/models/product.model.ts
src/app/model/cartService.model.ts → src/app/core/models/cart.model.ts
                                   → src/app/core/models/order.model.ts (new)
```

### Services
```
OLD → NEW
src/app/services/cart-service.ts → src/app/core/services/cart.service.ts (enhanced)
                                  → src/app/core/services/product.service.ts (new)
                                  → src/app/core/services/order.service.ts (new)
                                  → src/app/core/services/storage.service.ts (new)
```

### Components
```
OLD → NEW
src/app/components/header/ → src/app/shared/components/header/
src/app/components/product-list/ → src/app/features/products/components/product-list.component.*
src/app/components/productList/product-item/ → src/app/features/products/components/product-item/
src/app/components/cart/ → src/app/features/cart/components/cart.component.*
src/app/components/checkout/ → src/app/features/checkout/components/checkout.component.*
src/app/components/confirmation/ → src/app/features/checkout/components/confirmation.component.*
```

## Import Changes

### Before
```typescript
import { IProduct } from '../../model/product.model';
import { CartService } from '../../services/cart-service';
import { ICartItem } from '../../model/cartService.model';
```

### After
```typescript
import { Product, CartItem } from '@app/core/models';
import { CartService } from '@app/core/services';
// or
import { Product, CartItem } from '../../../core/models';
import { CartService } from '../../../core/services';
```

## Component Name Changes

| Old Name | New Name |
|----------|----------|
| `ProductList` | `ProductListComponent` |
| `ProductItem` | `ProductItemComponent` |
| `Cart` | `CartComponent` |
| `Checkout` | `CheckoutComponent` |
| `Confirmation` | `ConfirmationComponent` |
| `Header` | `HeaderComponent` |
| `App` | `AppComponent` |

## Interface Name Changes

| Old | New |
|-----|-----|
| `IProduct` | `Product` |
| `ICartItem` | `CartItem` |
| N/A | `OrderInfo` (new) |
| N/A | `CartState` (new) |

## Service API Changes

### CartService

#### Old
```typescript
// BehaviorSubject based
cart$: Observable<ICartItem[]>

addToCart(product: IProduct): void
removeFromCart(productId: number): void
getItems(): ICartItem[]
getTotal(): number
getItemCount(): number
clearCart(): void
```

#### New
```typescript
// Signal based with persistence
items: Signal<CartItem[]>
total: Signal<number>
itemCount: Signal<number>
isEmpty: Signal<boolean>

addToCart(product: Product): void
removeFromCart(productId: number): void
updateQuantity(productId: number, quantity: number): void // NEW
getItems(): CartItem[]  // backward compatible
getTotal(): number      // backward compatible
getItemCount(): number  // backward compatible
clearCart(): void
```

### New Services

#### ProductService (NEW)
```typescript
getProducts(): Observable<Product[]>
getProductById(id: number): Observable<Product | undefined>
searchProducts(query: string): Observable<Product[]>
filterByPriceRange(min: number, max: number): Observable<Product[]>
```

#### OrderService (NEW)
```typescript
createOrder(fullName, address, creditCard, totalAmount, totalItems): OrderInfo
getLastOrder(): OrderInfo | null
clearOrder(): void
hasOrder(): boolean
```

#### StorageService (NEW)
```typescript
setItem<T>(key: string, value: T): void
getItem<T>(key: string): T | null
removeItem(key: string): void
clear(): void
hasItem(key: string): boolean
```

## Constants Usage

### Before
```typescript
// Magic strings everywhere
sessionStorage.setItem('orderInfo', JSON.stringify(order));
alert('Your cart is empty!');
this.router.navigate(['/cart']);
```

### After
```typescript
// Centralized constants
this.sessionStorage.setItem(APP_CONSTANTS.STORAGE_KEYS.ORDER, order);
alert(APP_CONSTANTS.MESSAGES.CART_EMPTY);
this.router.navigate([`/${APP_CONSTANTS.ROUTES.CART}`]);
```

## Template Syntax Changes

### Before
```html
<!-- ngIf with *ngIf -->
<div *ngIf="loading">Loading...</div>
<div *ngIf="!loading && !error">
  <div *ngFor="let product of products">
    {{ product.price.toFixed(2) }}
  </div>
</div>
```

### After
```html
<!-- Control flow syntax (Angular 17+) -->
@if (isLoading()) {
  <div>Loading...</div>
}
@if (!isLoading() && !errorMessage()) {
  @for (product of products(); track product.id) {
    <div>{{ product.price | currency }}</div>
  }
}
```

## Styling Approach

### Before
- Component-specific styles
- Inline colors and values
- Limited reusability

### After
- Consistent design system
- CSS custom properties ready
- Modern responsive patterns
- Animation library ready

## File Naming Convention

### Before
```
product-list.ts
product-list.html
product-list.css
```

### After
```
product-list.component.ts
product-list.component.html
product-list.component.css
```

## Key Behavioral Changes

### 1. Cart Persistence
- **Before**: Cart cleared on page refresh
- **After**: Cart persists in localStorage

### 2. State Management
- **Before**: BehaviorSubject + manual subscriptions
- **After**: Angular Signals + automatic reactivity

### 3. Type Safety
- **Before**: Interfaces with 'I' prefix
- **After**: Strong typing without prefix

### 4. Error Handling
- **Before**: Basic console.error
- **After**: Comprehensive error states

### 5. Loading States
- **Before**: Simple boolean
- **After**: Rich loading UI with spinners

## Breaking Changes

⚠️ **None!** The refactored version is 100% backward compatible in functionality.

However, if you were importing from the old structure:
- Update import paths
- Update component names in routes
- Update any direct service references

## Benefits Summary

✅ **Better Organization**: Feature-based structure
✅ **Type Safety**: Comprehensive TypeScript
✅ **Performance**: Lazy loading + signals
✅ **Maintainability**: Centralized config
✅ **UX**: Modern UI with better states
✅ **Developer Experience**: Clear patterns

## Migration Checklist

If migrating an existing project:

- [ ] Update import paths
- [ ] Rename components (add 'Component' suffix)
- [ ] Update template syntax to control flow
- [ ] Replace 'I' prefix interfaces
- [ ] Use APP_CONSTANTS instead of magic strings
- [ ] Update service subscriptions to signals
- [ ] Test all features
- [ ] Update documentation

---

**Need Help?** Check REFACTORING_GUIDE.md for detailed architecture explanations.
