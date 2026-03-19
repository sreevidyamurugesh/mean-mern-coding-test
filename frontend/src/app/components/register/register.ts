import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  form: any = {};
  loading = false;
  error = '';

  constructor(private auth: AuthService) {}

  register() {
    if (!this.form.username || !this.form.password || !this.form.email) {
      this.error = 'Please fill all fields';
      return;
    }
    this.loading = true;
    this.auth.register(this.form).subscribe({
      next: () => {
        alert('✅ Registration successful! Please log in.');
        this.error = '';
        this.loading = false;
      },
      error: (err: any) => {
        this.error = 'Registration failed. Please try again. ❌';
        this.loading = false;
      }
    });
  }
}