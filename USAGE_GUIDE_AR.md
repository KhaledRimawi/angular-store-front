# دليل الاستخدام السريع - StoreFront

## 🚀 البدء السريع

### 1. التثبيت
```bash
cd Store-Front-FrontEnd
npm install
```

### 2. التشغيل
```bash
npm start
```

سيفتح المتصفح تلقائياً على `http://localhost:4200`

## 📱 استخدام التطبيق

### صفحة المنتجات (الرئيسية)
1. ستجد جميع المنتجات معروضة في شبكة (grid)
2. كل منتج يحتوي على:
   - صورة
   - اسم
   - وصف
   - سعر
   - زر "Add to Cart"

3. اضغط على "Add to Cart" لإضافة منتج للسلة
4. ستظهر رسالة تأكيد
5. سيتحدث عداد السلة في الـ Header

### صفحة السلة (Cart)
1. اضغط على أيقونة السلة 🛒 في الـ Header
2. ستجد جميع المنتجات المضافة
3. يمكنك:
   - عرض تفاصيل كل منتج
   - رؤية الكمية والسعر الفرعي
   - حذف منتج معين
   - مسح السلة بالكامل
   - متابعة التسوق
   - الانتقال للدفع

### صفحة الدفع (Checkout)
1. من صفحة السلة، اضغط "Proceed to Checkout"
2. املأ النموذج:
   - **الاسم الكامل**: على الأقل 3 أحرف
   - **العنوان**: على الأقل 5 أحرف
   - **رقم البطاقة**: على الأقل 10 أرقام

3. ستظهر رسائل خطأ إذا كانت البيانات غير صحيحة
4. زر "Complete Order" لن يعمل حتى تكون جميع البيانات صحيحة

### صفحة التأكيد (Confirmation)
1. بعد إتمام الطلب، ستظهر صفحة التأكيد
2. ستجد:
   - رسالة نجاح
   - تفاصيل الطلب
   - المبلغ الإجمالي
   - معلومات التوصيل

3. يمكنك العودة للتسوق

## 🎯 الميزات المتقدمة

### استمرارية السلة
- السلة محفوظة في LocalStorage
- إذا أغلقت المتصفح وفتحته مرة أخرى، ستجد سلتك كما هي

### التحديثات الفورية
- أي تغيير في السلة يظهر فوراً في:
  - عداد الـ Header
  - صفحة السلة
  - صفحة الدفع

### Responsive Design
- يعمل على:
  - Desktop (شاشات كبيرة)
  - Tablets (تابلت)
  - Mobile (موبايل)

## 🛠️ أوامر مفيدة

```bash
# تشغيل التطبيق
npm start

# بناء للإنتاج
npm run build

# تشغيل الاختبارات
npm test

# فحص الكود
ng lint
```

## 📂 البحث في الكود

### إيجاد مكون معين
```
src/app/features/
├── products/     - كل ما يتعلق بالمنتجات
├── cart/         - سلة التسوق
└── checkout/     - الدفع والتأكيد
```

### إيجاد خدمة معينة
```
src/app/core/services/
├── cart.service.ts      - إدارة السلة
├── product.service.ts   - جلب المنتجات
├── order.service.ts     - إدارة الطلبات
└── storage.service.ts   - التخزين المحلي
```

### إيجاد نموذج بيانات
```
src/app/core/models/
├── product.model.ts  - نموذج المنتج
├── cart.model.ts     - نموذج السلة
└── order.model.ts    - نموذج الطلب
```

## 🎨 تخصيص التصميم

### تغيير الألوان
افتح `src/app/core/constants/app.constants.ts` وعدّل:

```typescript
// ألوان رئيسية في ملفات CSS
// ابحث عن:
#3b82f6  // اللون الأزرق الأساسي
#059669  // اللون الأخضر (النجاح)
#dc2626  // اللون الأحمر (الأخطاء)
```

### تغيير العملة
افتح `src/app/core/constants/app.constants.ts`:

```typescript
export const CURRENCY_CONFIG = {
  CODE: 'USD',    // غيّر إلى 'SAR' مثلاً
  SYMBOL: '$',    // غيّر إلى 'ريال' مثلاً
  DECIMAL_PLACES: 2,
}
```

### تغيير الرسائل
افتح `src/app/core/constants/app.constants.ts`:

```typescript
MESSAGES: {
  CART_EMPTY: 'سلتك فارغة!',  // مثال بالعربي
  // ... بقية الرسائل
}
```

## 🐛 حل المشاكل الشائعة

### المشكلة: لا تظهر المنتجات
**الحل**: تأكد من وجود ملف `src/assets/data.json`

### المشكلة: السلة لا تحفظ البيانات
**الحل**: تأكد من أن المتصفح يسمح بـ LocalStorage

### المشكلة: أخطاء في Console
**الحل**: 
```bash
# امسح node_modules وأعد التثبيت
rm -rf node_modules
npm install
```

### المشكلة: التطبيق لا يعمل على port 4200
**الحل**:
```bash
# استخدم port مختلف
ng serve --port 4300
```

## 📝 إضافة ميزة جديدة

### مثال: إضافة Wishlist

1. **أنشئ Model**:
```typescript
// src/app/core/models/wishlist.model.ts
export interface WishlistItem extends Product {
  addedDate: Date;
}
```

2. **أنشئ Service**:
```typescript
// src/app/core/services/wishlist.service.ts
@Injectable({ providedIn: 'root' })
export class WishlistService {
  // نفس نمط CartService
}
```

3. **أنشئ Component**:
```bash
# في المجلد الصحيح
src/app/features/wishlist/components/
```

4. **أضف Route**:
```typescript
// في app.routes.ts
{
  path: 'wishlist',
  loadComponent: () => import('./features/wishlist/...
}
```

## 💡 نصائح للمطورين

### 1. استخدم Constants
❌ **لا تفعل**:
```typescript
if (status === 'completed') { }
```

✅ **افعل**:
```typescript
if (status === APP_CONSTANTS.STATUS.COMPLETED) { }
```

### 2. استخدم Signals
❌ **لا تفعل**:
```typescript
private items = new BehaviorSubject<Item[]>([]);
```

✅ **افعل**:
```typescript
private items = signal<Item[]>([]);
readonly items$ = this.items.asReadonly();
```

### 3. استخدم Barrel Exports
❌ **لا تفعل**:
```typescript
import { Product } from './models/product.model';
import { CartItem } from './models/cart.model';
```

✅ **افعل**:
```typescript
import { Product, CartItem } from '@app/core/models';
```

## 🎓 تعلّم المزيد

- [Angular Documentation](https://angular.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [RxJS Documentation](https://rxjs.dev)
- [Angular Signals Guide](https://angular.dev/guide/signals)

## 🙋‍♂️ الأسئلة الشائعة

**س: هل يمكن استخدام NgRx بدلاً من Signals؟**  
ج: نعم، لكن Signals أبسط للتطبيقات الصغيرة والمتوسطة.

**س: كيف أربط التطبيق بـ Backend؟**  
ج: عدّل `ProductService` ليستدعي API حقيقي بدلاً من data.json

**س: هل يدعم التطبيق عدة لغات؟**  
ج: حالياً لا، لكن يمكن إضافة i18n

**س: كيف أضيف Authentication؟**  
ج: أنشئ AuthService وأضف Guards للمسارات

---

**بالتوفيق! 🚀**

للمزيد من المساعدة، راجع ملفات التوثيق الأخرى.
