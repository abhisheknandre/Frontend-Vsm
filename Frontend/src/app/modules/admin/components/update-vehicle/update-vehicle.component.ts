import { Component } from '@angular/core';
import { VehicleserviceService } from '../../../../vehicleservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  styleUrl: './update-vehicle.component.css'
})
export class UpdateVehicleComponent {
  AdvisorList: any[];
  id: any;
  vehicle: any;

  constructor(private service:VehicleserviceService, private route : ActivatedRoute, private router: Router){}

  ngOnInit(): void{
    this.service.getAdvisorList().subscribe((data:any[])=>{
      this.AdvisorList=data;
    });
    this.id = this.route.snapshot.params['id'];
    this.service.getVehicleById(this.id).subscribe((data:any )=>{
      this.vehicle = data;
      console.log(data);
    });
  }

  
  onSubmit(){
    this.service.updateVehicleStatus(this.id, this.vehicle).subscribe(data =>{
      this.gotoList();
    });
  
  }

  gotoList(){
    this.router.navigate(['/admin-dashboard/vehicle-list']);
  }


}
