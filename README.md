# 🛒 StoreFront - Modern Angular E-Commerce Application

<div align="center">

![Angular](https://img.shields.io/badge/Angular-17+-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![RxJS](https://img.shields.io/badge/RxJS-7.0+-B7178C?style=for-the-badge&logo=reactivex&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

**A fully functional, production-ready single-page e-commerce application built with Angular 17+**

[Live Demo](#) | [Features](#-features) | [Installation](#-installation) | [Documentation](#-project-structure)

</div>

---

## 📋 Table of Contents

- [About The Project](#-about-the-project)
- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Usage](#-usage)
- [Screenshots](#-screenshots)
- [Technical Implementation](#-technical-implementation)
- [Building for Production](#-building-for-production)
- [Developer](#-developer)

---

## 🎯 About The Project

**StoreFront** is a modern, feature-rich e-commerce application that demonstrates industry-standard Angular development practices. Built with Angular 17+ and leveraging the latest features like Signals and standalone components, this application provides a complete shopping experience from product browsing to order confirmation.

### Why This Project?

This project showcases:
- ✅ **Modern Architecture**: Feature-based structure with clear separation of concerns
- ✅ **Best Practices**: Following Angular style guide and industry standards
- ✅ **Type Safety**: Comprehensive TypeScript types and interfaces
- ✅ **State Management**: Using Angular Signals for reactive state
- ✅ **Persistence**: LocalStorage integration for cart persistence
- ✅ **Real-World Features**: Complete e-commerce workflow with validation

---

## ✨ Features

### 🏪 **Product Management**
- ✅ Browse products in a responsive grid layout
- ✅ Product cards with images, descriptions, and prices
- ✅ Real-time product data fetching from JSON/API
- ✅ Beautiful hover effects and animations

### 🛍️ **Shopping Cart**
- ✅ Add products to cart with quantity management
- ✅ Real-time total calculation
- ✅ Remove items from cart
- ✅ Cart badge showing item count in navigation
- ✅ **Cart persistence** - Data saved in LocalStorage
- ✅ Empty cart state with helpful messages

### 💳 **Checkout Process**
- ✅ Form validation with real-time error messages
  - Name (minimum 3 characters)
  - Address (minimum 5 characters)
  - Credit Card (minimum 10 digits)
- ✅ Order summary with total calculation
- ✅ Disabled submit until form is valid
- ✅ Redirect protection for empty carts

### ✅ **Order Confirmation**
- ✅ Success page with order details
- ✅ Order information stored in SessionStorage
- ✅ Masked credit card display for security

### 🎨 **UI/UX Excellence**
- ✅ Modern, gradient-based design
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth animations and transitions
- ✅ Loading states and error handling
- ✅ User feedback (alerts, messages)
- ✅ Accessible design (ARIA labels, keyboard navigation)

---

## 🛠️ Technologies Used

### **Core Framework**
- **Angular 17+** - Latest version with Signals and standalone components
- **TypeScript 5.0+** - Type-safe development
- **RxJS 7.0+** - Reactive programming with Observables

### **State Management**
- **Angular Signals** - Modern reactive state management
- **Services** - Shared state across components
- **LocalStorage** - Cart persistence
- **SessionStorage** - Order information

### **Routing & Navigation**
- **Angular Router** - SPA navigation
- **Lazy Loading** - Optimized performance
- **Route Guards** - Protected routes

### **Forms & Validation**
- **Template-Driven Forms** - Two-way data binding with ngModel
- **Built-in Validators** - Required, minLength
- **Real-time Validation** - Instant user feedback

### **HTTP & Data**
- **HttpClient** - Data fetching from JSON/API
- **Error Handling** - Comprehensive error management

### **Styling**
- **Custom CSS** - Modern gradient-based design
- **Flexbox & Grid** - Responsive layouts
- **CSS Animations** - Smooth transitions

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (v9 or higher) - Comes with Node.js
- **Angular CLI** - Will be installed with dependencies

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/store-front.git
cd store-front
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm start
```

Or use Angular CLI directly:

```bash
ng serve
```

4. **Open your browser**

Navigate to `http://localhost:4200/`

The application will automatically reload when you make changes to the source files.

---

## 📁 Project Structure

```
Store-Front-FrontEnd/
├── src/
│   ├── app/
│   │   ├── core/                      # Core application logic
│   │   │   ├── constants/            # Application constants
│   │   │   │   └── app.constants.ts
│   │   │   ├── models/               # TypeScript models
│   │   │   │   ├── product.model.ts
│   │   │   │   ├── cart.model.ts
│   │   │   │   ├── order.model.ts
│   │   │   │   └── index.ts
│   │   │   └── services/             # Business logic services
│   │   │       ├── cart.service.ts   # Cart state management
│   │   │       ├── product.service.ts
│   │   │       ├── order.service.ts
│   │   │       ├── storage.service.ts
│   │   │       └── index.ts
│   │   │
│   │   ├── shared/                   # Shared resources
│   │   │   ├── components/
│   │   │   │   └── header/          # Navigation header
│   │   │   └── pipes/
│   │   │       └── currency.pipe.ts
│   │   │
│   │   ├── features/                 # Feature modules
│   │   │   ├── products/
│   │   │   │   └── components/
│   │   │   │       ├── product-list.component.*
│   │   │   │       └── product-item/
│   │   │   ├── cart/
│   │   │   │   └── components/
│   │   │   │       └── cart.component.*
│   │   │   └── checkout/
│   │   │       └── components/
│   │   │           ├── checkout.component.*
│   │   │           └── confirmation.component.*
│   │   │
│   │   ├── app.component.*           # Root component
│   │   ├── app.routes.ts             # Route configuration
│   │   └── app.config.ts             # App configuration
│   │
│   ├── assets/
│   │   └── data.json                 # Product data
│   │
│   ├── styles.css                     # Global styles
│   └── index.html
│
├── angular.json                       # Angular CLI configuration
├── package.json                       # Dependencies
├── tsconfig.json                      # TypeScript configuration
└── README.md                          # You are here!
```

### Key Directories

- **`core/`** - Contains models, services, and constants used throughout the app
- **`shared/`** - Reusable components, pipes, and directives
- **`features/`** - Feature-specific components organized by domain
- **`assets/`** - Static files like images and JSON data

---

## 📖 Usage

### User Flow

1. **🏠 Home Page** (`/`)
   - Browse the product catalog
   - View product details (image, name, price, description)
   - Click "Add to Cart" to add items

2. **🛒 Shopping Cart** (`/cart`)
   - View all items in your cart
   - Adjust quantities or remove items
   - See real-time total calculation
   - Click "Proceed to Checkout"

3. **💳 Checkout** (`/checkout`)
   - Fill in your information:
     - Full Name (min 3 characters)
     - Address (min 5 characters)
     - Credit Card (min 10 digits)
   - Review order summary
   - Submit your order

4. **✅ Confirmation** (`/confirmation`)
   - View order success message
   - See order details
   - Option to continue shopping

---

## 🖼️ Screenshots

### Product List Page
The main page displays all available products in a beautiful grid layout with hover effects.

### Shopping Cart
Shows all cart items with the ability to manage quantities and remove items.

### Checkout Form
Validated form collecting customer information with real-time error messages.

### Order Confirmation
Success page displaying order details after successful checkout.

---

## 🔧 Technical Implementation

### Component Architecture

#### **Parent-Child Communication**
- **`@Input()`** - Pass data from parent to child (e.g., ProductList → ProductItem)
- **`@Output()` & `EventEmitter`** - Send events from child to parent

```typescript
// Modern Angular 17+ signal-based approach
product = input.required<Product>();  // Input
addToCart = output<Product>();        // Output
```

#### **Sibling Communication**
- **Services** - CartService shares cart state between unrelated components
- **Signals** - Reactive state updates across the application

```typescript
// CartService with Signals
readonly items = this.cartItemsSignal.asReadonly();
readonly total = computed(() => calculateCartTotal(this.items()));
readonly itemCount = computed(() => calculateItemCount(this.items()));
```

### Routing Configuration

**Lazy Loading** for optimal performance:

```typescript
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/products/...').then(m => m.ProductListComponent)
  },
  // ... other routes
];
```

### Form Validation

**Template-Driven Forms** with real-time validation:

```html
<input
  [(ngModel)]="fullName"
  required
  [minlength]="3"
  #nameField="ngModel">

@if (nameField.invalid && nameField.touched) {
  <div class="error-message">Name is required</div>
}
```

### State Persistence

- **LocalStorage**: Cart data persists across browser sessions
- **SessionStorage**: Order information during checkout flow
- **Automatic Sync**: Changes saved immediately

### Data Flow Diagram

```
ProductService (HTTP) → ProductListComponent
                              ↓
                        ProductItemComponent
                              ↓
                        CartService (Signals)
                              ↓
        ┌─────────────────────┼─────────────────────┐
        ↓                     ↓                     ↓
  HeaderComponent      CartComponent        CheckoutComponent
   (cart badge)        (cart items)         (order form)
```

---

## 🏗️ Building for Production

### Build the application

```bash
ng build
```

Build artifacts will be stored in the `dist/` directory.

### Build with production configuration

```bash
ng build --configuration production
```

### Preview production build

```bash
ng serve --configuration production
```

### Deploy to GitHub Pages

```bash
ng build --base-href /store-front/
# Then deploy the dist/ folder to gh-pages branch
```

---

## 🧪 Testing

### Run unit tests

```bash
ng test
```

### Run tests with coverage

```bash
ng test --code-coverage
```

### Run end-to-end tests

```bash
ng e2e
```

---

## 🎓 Learning Outcomes

This project demonstrates proficiency in:

- ✅ **Angular Fundamentals**: Components, Services, Modules
- ✅ **Modern Angular Features**: Signals, Standalone Components
- ✅ **State Management**: Reactive patterns with RxJS and Signals
- ✅ **Routing**: SPA navigation with lazy loading
- ✅ **Forms**: Template-driven forms with validation
- ✅ **HTTP**: Data fetching and error handling
- ✅ **TypeScript**: Strong typing and interfaces
- ✅ **Best Practices**: Clean code, separation of concerns
- ✅ **UX Design**: Responsive, accessible, user-friendly interface

---

## 📚 Key Files & Components

| File | Purpose |
|------|---------|
| `app.routes.ts` | Route configuration with lazy loading |
| `cart.service.ts` | Cart state management with Signals |
| `product.service.ts` | Product data fetching with HttpClient |
| `product.model.ts` | TypeScript interfaces and type guards |
| `app.constants.ts` | Centralized application constants |
| `storage.service.ts` | LocalStorage/SessionStorage abstraction |

---

## 🌟 Highlights & Best Practices

### Architecture
- ✅ **Feature-Based Structure** - Organized by business features
- ✅ **Barrel Exports** - Clean imports with index.ts files
- ✅ **Standalone Components** - Modern Angular architecture
- ✅ **Lazy Loading** - Optimized bundle sizes

### Code Quality
- ✅ **Type Safety** - Comprehensive TypeScript types
- ✅ **Type Guards** - Runtime type validation
- ✅ **Helper Functions** - Reusable utility functions
- ✅ **JSDoc Comments** - Well-documented code

### Performance
- ✅ **Signals** - Efficient reactivity
- ✅ **Computed Values** - Memoized calculations
- ✅ **Change Detection** - Optimized updates
- ✅ **Code Splitting** - Lazy-loaded routes

### User Experience
- ✅ **Loading States** - Visual feedback during operations
- ✅ **Error Handling** - Graceful error messages
- ✅ **Empty States** - Helpful messages when no data
- ✅ **Accessibility** - ARIA labels and keyboard support

---

## 📄 License

This project is licensed under the MIT License - see below for details.

```
MIT License

Copyright (c) 2025 Khaled Abdaraheem

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👨‍💻 Developer

<div align="center">

### **Khaled Abdaraheem**

*Full Stack Developer | Angular Specialist*

**Built with ❤️ using Angular 17+**

---

### 📫 Connect

[GitHub](https://github.com/yourusername) | [LinkedIn](https://linkedin.com/in/yourprofile) | [Portfolio](https://yourportfolio.com)

---

### 🎯 Project Stats

![Angular](https://img.shields.io/badge/Framework-Angular%2017+-DD0031)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6)
![Lines of Code](https://img.shields.io/badge/Lines%20of%20Code-2000+-success)
![Components](https://img.shields.io/badge/Components-6-blue)

---

*This project was created as part of the Udacity Frontend Nanodegree Program*

**© 2025 Khaled Abdaraheem. All Rights Reserved.**

</div>

---

## 🙏 Acknowledgments

- [Angular Team](https://angular.io/) - For the amazing framework
- [Udacity](https://www.udacity.com/) - For the comprehensive learning program
- [Material Design](https://material.io/) - For design inspiration
- Community contributors and reviewers

---

## 📞 Support

If you have any questions or need help with the project:

1. Check the [documentation](#-table-of-contents)
2. Review the [technical implementation](#-technical-implementation)
3. Open an issue on GitHub
4. Contact the developer

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with 💙 and ☕ by **Khaled Abdaraheem**

</div>
