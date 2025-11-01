import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../../model/product.model';

@Component({
  selector: 'app-product-item',
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem {
  @Input() product!: IProduct;
  @Output() addToCart = new EventEmitter<IProduct>();

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
