# 🛍️ StoreFront - Modern Angular E-Commerce Application

[![Angular](https://img.shields.io/badge/Angular-20.3-red.svg)](https://angular.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> A fully refactored, production-ready Angular e-commerce application featuring modern architecture, clean code, and beautiful UI.

## ✨ Features

- 🎯 **Feature-Based Architecture** - Organized by business features
- 🚀 **Angular Signals** - Modern reactive state management
- 💾 **LocalStorage Persistence** - Cart survives browser refreshes
- 🎨 **Modern UI/UX** - Beautiful, responsive design
- 📱 **Fully Responsive** - Works on all devices
- 🔒 **Type-Safe** - Comprehensive TypeScript coverage
- 🎭 **Smooth Animations** - Delightful user experience
- 📦 **Lazy Loading** - Optimized performance

## 🚀 Quick Start

```bash
# Clone the repository
git clone <repository-url>
cd Store-Front-FrontEnd

# Install dependencies
npm install

# Run development server
npm start

# Open browser at http://localhost:4200
```

## 📋 Table of Contents

- [Documentation](#-documentation)
- [Project Structure](#-project-structure)
- [Tech Stack](#-tech-stack)
- [Features](#-features-in-detail)
- [Screenshots](#-screenshots)
- [Development](#-development)
- [Contributing](#-contributing)
- [License](#-license)

## 📚 Documentation

| Document | Description |
|----------|-------------|
| [**📖 USAGE_GUIDE_AR.md**](USAGE_GUIDE_AR.md) | Complete usage guide (Arabic) - Start here! |
| [**📝 REFACTORING_SUMMARY_AR.md**](REFACTORING_SUMMARY_AR.md) | Refactoring summary (Arabic) |
| [**🔧 REFACTORING_GUIDE.md**](REFACTORING_GUIDE.md) | Comprehensive refactoring guide (English) |
| [**🔄 MIGRATION_GUIDE.md**](MIGRATION_GUIDE.md) | Migration guide from old structure |
| [**✅ PROJECT_COMPLETE.md**](PROJECT_COMPLETE.md) | Project completion summary |

## 📁 Project Structure

```
src/app/
├── core/                          # Core application logic
│   ├── constants/                 # Application constants
│   ├── models/                    # Data models & interfaces
│   └── services/                  # Business logic services
│
├── shared/                        # Shared resources
│   ├── components/                # Reusable components
│   └── pipes/                     # Custom pipes
│
├── features/                      # Feature modules
│   ├── products/                  # Product catalog
│   ├── cart/                      # Shopping cart
│   └── checkout/                  # Checkout & confirmation
│
├── app.component.*                # Root component
├── app.routes.ts                  # Route configuration
└── app.config.ts                  # App configuration
```

## 🛠️ Tech Stack

- **Framework**: Angular 20.3
- **Language**: TypeScript 5.9
- **State Management**: Angular Signals
- **Routing**: Angular Router (Lazy Loading)
- **Forms**: Template-driven Forms
- **HTTP**: Angular HttpClient
- **Storage**: LocalStorage & SessionStorage
- **Styling**: Pure CSS3

## 🎯 Features In Detail

### 🛒 Shopping Cart
- Add/remove products
- Real-time updates
- LocalStorage persistence
- Quantity management
- Subtotal calculations

### 📦 Product Catalog
- Grid layout
- Product cards with images
- Add to cart functionality
- Responsive design
- Loading & error states

### 💳 Checkout Process
- Form validation
- Order summary
- Payment information
- Order confirmation
- Session storage for orders

### 🎨 UI/UX
- Modern, clean design
- Smooth animations
- Hover effects
- Loading spinners
- Empty states
- Error handling

## 📸 Screenshots

> Add screenshots here showing:
> - Product catalog
> - Shopping cart
> - Checkout form
> - Order confirmation

## 🔧 Development

### Prerequisites
- Node.js 18+
- npm 9+

### Available Scripts

```bash
# Development server
npm start

# Build for production
npm run build

# Run unit tests
npm test

# Lint code
ng lint
```

### Code Style

This project follows:
- Angular Style Guide
- TypeScript strict mode
- Feature-based structure
- Component naming conventions

## 🏗️ Architecture Highlights

### Models
- Strong TypeScript interfaces
- Type guards for runtime validation
- Helper functions for calculations
- Immutable data patterns

### Services
- **CartService**: Signal-based cart management
- **ProductService**: Product data & filtering
- **OrderService**: Order management
- **StorageService**: Storage abstraction

### Components
- Signal-based inputs/outputs
- OnPush change detection ready
- Modular & reusable
- Well-documented

## 🎨 Customization

### Change Colors
Edit `src/app/core/constants/app.constants.ts`

### Change Currency
Modify `CURRENCY_CONFIG` in constants

### Add New Feature
1. Create feature folder under `features/`
2. Add models to `core/models/`
3. Create services in `core/services/`
4. Update routes in `app.routes.ts`

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage
```

## 📝 Best Practices

✅ Use constants instead of magic strings  
✅ Implement barrel exports (index.ts)  
✅ Follow feature-based structure  
✅ Keep components small & focused  
✅ Document with JSDoc comments  
✅ Use signals for reactive state  

## 🚧 Future Enhancements

- [ ] Backend integration
- [ ] User authentication
- [ ] Product search & filtering
- [ ] Wishlist functionality
- [ ] Order history
- [ ] Payment gateway
- [ ] PWA features
- [ ] Internationalization (i18n)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👏 Acknowledgments

- Angular Team for the amazing framework
- Community for best practices and patterns
- All contributors and users

## 📧 Contact

For questions or feedback, please open an issue.

---

**Built with ❤️ using Angular**

*Version 2.0.0 - Refactored Edition*
