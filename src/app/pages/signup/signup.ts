import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './signup.html',
  styleUrls: ['./signup.scss']
})
export class Signup {
  user = {
    username: '',
    email: '',
    password: ''
  };

  signupError: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  onSignup(): void {
    this.authService.signup(this.user).subscribe({
      next: () => {
        this.signupError = null;
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Signup failed:', err);
        // Try to extract a message from the backend response
        if (err.error && err.error.message) {
          this.signupError = err.error.message;
        } else {
          this.signupError = 'Signup failed. Please try again.';
        }
      }
    });
  }
}
