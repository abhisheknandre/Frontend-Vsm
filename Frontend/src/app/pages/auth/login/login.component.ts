import { Component } from '@angular/core';
import { VehicleserviceService } from '../../../vehicleservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: VehicleserviceService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.password).subscribe(
      (response: any) => {
        // Store the user details in localStorage
        localStorage.setItem('token', response.jwt);
        localStorage.setItem('userId', response.userId);
        localStorage.setItem('userRole', response.userRole);
        localStorage.setItem('userName', response.name);

        // Redirect the user based on their role
        const userRole = response.userRole;
        if (userRole != 'ADMIN') {
          this.router.navigate(['/admin']);
        } else if (userRole === 'SUBSCRIBER' || userRole === 'CUSTOMER') {
          this.router.navigate(['/subscriber']);
        } else {
          // For any other role, you can redirect to a default page
          this.router.navigate(['/admin']);
        }
      },
      (error) => {
        console.error('Login error:', error);
      }
    );
  }
}
