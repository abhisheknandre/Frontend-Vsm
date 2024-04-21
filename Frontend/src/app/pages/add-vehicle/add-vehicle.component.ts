import { Component } from '@angular/core';
import { Toast } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';
import { VehicleserviceService } from '../../vehicleservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent {

  ownerName: any;
  ownerEmail: any;
  name: any;
  year: any;
  licensePlate: any;

  submitted = false;

  constructor(private toastr: ToastrService,
            private service: VehicleserviceService,
            private router: Router) { }

  submit() {
    this.service.addVehicle(this.name, this.year, this.licensePlate, this.ownerName, this.ownerEmail).subscribe(
      (response: any) => {
        console.log("done");
        this.submitted = true;
        this.toastr.success('', "Submitted successfully");
        this.resetForm(); // Call resetForm function after success
        this.router.navigate(['/add-vehicle']);
      }
    );
  }

  resetForm() {
    this.ownerName = '';
    this.ownerEmail = '';
    this.name = '';
    this.year = '';
    this.licensePlate = '';
    this.submitted = false; // Reset submitted flag as well
  }

  onReset() {
    this.resetForm();
  }
}
