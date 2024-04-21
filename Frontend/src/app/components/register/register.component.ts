import { Component } from '@angular/core';
import { VehicleserviceService } from '../../vehicleservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private authService: VehicleserviceService, private router: Router) {}
name: '';
email: '';
password: '';
role: '';

register() {
  this.authService.register(this.name, this.email, this.password, this.role).subscribe(
    (response: any) => {
      console.log('Registration successful!', response);
      this.router.navigate(['/login']);
      // Handle successful registration (optional)
      // - Display a success message to the user
      // - Redirect to the login page
  
      // Alternatively, if automatic login is desired:
      // - Store the user details in localStorage (similar to login)
      // - Redirect to the appropriate dashboard based on role
    },
    (error: any) => {
      console.error('Registration failed:', error);
      // Handle registration errors (e.g., display error message to user)
      // - Check for specific error codes (e.g., email already exists)
      // - Provide appropriate feedback to the user
    }
  );
  
}

}
