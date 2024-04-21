import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleListComponent } from './pages/vehicle-list/vehicle-list.component';
import { UpdateVehicleComponent } from './pages/update-vehicle/update-vehicle.component';
import { AddVehicleComponent } from './pages/add-vehicle/add-vehicle.component';

const routes: Routes = [
  {path:'vehiclelist', component:VehicleListComponent},
  {path:'update-vehicle/:id', component:UpdateVehicleComponent},
  {
    path:'add-vehicle', component:AddVehicleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
