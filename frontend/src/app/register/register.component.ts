import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { AuthService } from '../../services/auth/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true, // Marks this as a standalone component
  imports: [FormsModule, HttpClientModule], 
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerData = { 
    username: '', 
    password: '',
    firstName:'',
    lastName:'',
    phoneNumber: '',
    role: 'ROLE_CLIENT'
   };
  
    constructor(
      private http: HttpClient,
      //private authService: AuthService,
      private router: Router
    ) {}
  
    /*onRegister(): void {
      this.http.post<any>('http://localhost:8080/register', this.registerData).subscribe({
        next: (response) => {
          const token = response.token;
          this.authService.saveToken(token);
          const role = this.authService.getRole();
  
          if (role === 'ROLE_CLIENT') {
            this.router.navigate(['/accueil']);
            
          } else {
            this.router.navigate(['/']);
          }
        },
        error: (err) => {
          console.error('Register failed:', err);
          alert('Invalid credentials');
        },
      });
    }*/
  
}


