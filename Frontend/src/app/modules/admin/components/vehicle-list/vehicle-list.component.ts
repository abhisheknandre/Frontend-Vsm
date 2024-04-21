import { Component } from '@angular/core';
import { VehicleserviceService } from '../../../../vehicleservice.service';
import { Vehicle } from '../../../../vehicle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.css'
})
export class VehicleListComponent {
  vehicles: Vehicle[];
  
  constructor(private vehicleservice: VehicleserviceService, private router: Router){}
  

  ngOnInit(): void{
    this.getVehicle();
  }

  private getVehicle(){
    this.vehicleservice.getVehicleList().subscribe(data =>{
      this.vehicles = data;
    });
  }

  updateVehicle(id: number){
    this.router.navigate(['admin-dashboard/update-vehicle', id]);
  }

  deleteVehicle(id: number){
    this.vehicleservice.deleteVehicle(id).subscribe(data =>{
      console.log(data);
      this.getVehicle();
    });
  }
}

