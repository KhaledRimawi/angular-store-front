import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../model/product.model';
import { ProductItem } from '../productList/product-item/product-item';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductItem],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {
  products: IProduct[] = [];
  loading = true;
  error = '';

  constructor(
    private http: HttpClient,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.http.get<IProduct[]>('/assets/data.json').subscribe({
      next: (data) => {
        this.products = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load products';
        this.loading = false;
        console.error('Error loading products:', err);
      }
    });
  }

  onAddToCart(product: IProduct): void {
    this.cartService.addToCart(product);
    alert(`${product.name} added to cart!`);
  }
}
