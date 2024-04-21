import { Component } from '@angular/core';
import { VehicleserviceService } from '../../vehicleservice.service';
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

  ngOnInit(): void {
    let token = localStorage.getItem('token');
    let role = localStorage.getItem('userRole');
    if(token){
      if(role === 'ADMIN'){
        this.router.navigate(['/admin-dashboard/dashboard']);
      }
      else if(role === 'SERVICEADVISOR'){
        this.router.navigate(['/advisor-dashboard/advisorDashboard']);
      }
      
    }
    else{
      
    }    
  }
  login() {
    this.authService.login(this.email, this.password).subscribe(
      (response: any) => {
        console.log('done')
        // Store the user details in localStorage
        localStorage.setItem('token', response.jwt);
        localStorage.setItem('userId', response.userId);
        localStorage.setItem('userRole', response.role);
        localStorage.setItem('userName', response.name);
        localStorage.setItem('userEmail', response.email);
        console.log(response.jwt,response.role)
        console.log(response)

        // Redirect the user based on their role
        const userRole = response.role;
        if (userRole === 'ADMIN') {
          this.router.navigate(['/admin-dashboard/dashboard']);
          console.log('admin')
        } else if (userRole === 'SERVICEADVISOR') {
          this.router.navigate(['/advisor-dashboard/advisorDashboard']);
          console.log('service')
        } else {
          // For any other role, you can redirect to a default page
          this.router.navigate(['/login']);
        }
      }
    );
  }
}
