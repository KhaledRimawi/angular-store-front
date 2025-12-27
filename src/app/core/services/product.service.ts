import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError, throwError } from 'rxjs';
import { Product, isProduct } from '../models';
import { APP_CONSTANTS } from '../constants/app.constants';

/**
 * Service for managing product data
 * Handles product fetching and validation
 */
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  /**
   * Fetch all products from the API
   */
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(APP_CONSTANTS.API.PRODUCTS).pipe(
      map(products => this.validateProducts(products)),
      catchError(error => {
        console.error('Error fetching products:', error);
        return throwError(() => new Error(APP_CONSTANTS.MESSAGES.ERROR_LOAD_PRODUCTS));
      })
    );
  }

  /**
   * Get a single product by ID
   */
  getProductById(id: number): Observable<Product | undefined> {
    return this.getProducts().pipe(
      map(products => products.find(product => product.id === id))
    );
  }

  /**
   * Search products by name or description
   */
  searchProducts(query: string): Observable<Product[]> {
    const searchTerm = query.toLowerCase().trim();
    
    return this.getProducts().pipe(
      map(products => 
        products.filter(product => 
          product.name.toLowerCase().includes(searchTerm) ||
          product.description.toLowerCase().includes(searchTerm)
        )
      )
    );
  }

  /**
   * Filter products by price range
   */
  filterByPriceRange(minPrice: number, maxPrice: number): Observable<Product[]> {
    return this.getProducts().pipe(
      map(products => 
        products.filter(product => 
          product.price >= minPrice && product.price <= maxPrice
        )
      )
    );
  }

  /**
   * Validate product data structure
   */
  private validateProducts(products: unknown): Product[] {
    if (!Array.isArray(products)) {
      throw new Error('Invalid product data: expected an array');
    }

    return products.filter(product => {
      const isValid = isProduct(product);
      if (!isValid) {
        console.warn('Invalid product data:', product);
      }
      return isValid;
    });
  }
}
