import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { AuthService } from '../../services/auth/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true, // Marks this as a standalone component
  imports: [FormsModule,HttpClientModule], 
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = { username: '', password: '' };

  constructor(
    private http: HttpClient,
    //private authService: AuthService,
    private router: Router
  ) {}

  /*onLogin(): void {
    this.http.post<any>('http://localhost:8080/login', this.loginData).subscribe({
      next: (response) => {
        const token = response.token;
        this.authService.saveToken(token);
        const role = this.authService.getRole();

        if (role === 'ROLE_ADMIN') {
          this.router.navigate(['/dashboard']);
        } else if (role === 'ROLE_SERVICE_SANTE') {
          console.log('ROLE_SERVICE_SANTE: ', role,'token:',token);
          this.router.navigate(['/dashboard_sante']);
        } else if (role === 'ROLE_CLIENT') {
          this.router.navigate(['/accueil']);
          
        } else {
          this.router.navigate(['/']);
        }
      },
      error: (err) => {
        console.error('Login failed:', err);
        alert('Invalid credentials');
      },
    });
  }*/
}
