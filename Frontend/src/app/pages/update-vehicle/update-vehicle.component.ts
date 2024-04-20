import { Component } from '@angular/core';
import { VehicleserviceService } from '../../vehicleservice.service';

@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  styleUrl: './update-vehicle.component.css'
})
export class UpdateVehicleComponent{
  AdvisorList: any[];

  constructor(private service:VehicleserviceService){}

  ngOnInit(): void{
    this.service.getAdvisorList().subscribe((data:any[])=>{
      this.AdvisorList=data;
    })
  }

}
