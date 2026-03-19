import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product implements OnInit {

  products: any[] = [];
  form: any = {};
  loading = false;
  error = '';

  constructor(private service: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.loading = true;
    this.service.getAll().subscribe({
      next: (res: any) => {
        this.products = res;
        this.loading = false;
      },
      error: (err: any) => {
        this.error = 'Failed to load products';
        this.loading = false;
        console.error('Error loading products:', err);
      }
    });
  }

  save() {
    if (!this.form.name || !this.form.price) {
      this.error = 'Please fill all required fields';
      return;
    }
    this.loading = true;
    this.service.create(this.form).subscribe({
      next: () => {
        this.form = {};
        this.error = '';
        this.loadProducts();
      },
      error: (err: any) => {
        this.error = 'Failed to create product';
        console.error('Error creating product:', err);
        this.loading = false;
      }
    });
  }

  delete(id: string) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.service.delete(id).subscribe({
        next: () => this.loadProducts(),
        error: (err: any) => {
          this.error = 'Failed to delete product';
          console.error('Error deleting product:', err);
        }
      });
    }
  }
}