import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  form: any = {};
  loading = false;
  error = '';

  constructor(private auth: AuthService) {}

  login() {
    if (!this.form.username || !this.form.password) {
      this.error = 'Please fill all fields';
      return;
    }
    this.loading = true;
    this.auth.login(this.form).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token || 'logged_in');
        localStorage.setItem('user', JSON.stringify(res.user || this.form));
        alert('✅ Login successful!');
        this.error = '';
        this.loading = false;
      },
      error: (err: any) => {
        this.error = 'Invalid credentials ❌';
        this.loading = false;
      }
    });
  }
}