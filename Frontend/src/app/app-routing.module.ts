import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleListComponent } from './pages/vehicle-list/vehicle-list.component';
import { UpdateVehicleComponent } from './pages/update-vehicle/update-vehicle.component';

const routes: Routes = [
  {path:'vehiclelist', component:VehicleListComponent},
  {path:'update-vehicle/:id', component:UpdateVehicleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
