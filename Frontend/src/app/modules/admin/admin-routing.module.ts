import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddvehicleComponent } from './components/addvehicle/addvehicle.component';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { UpdateVehicleComponent } from './components/update-vehicle/update-vehicle.component';

const routes: Routes = [
  {path: 'adminDashboard', component:AdmindashboardComponent}
  ,{path:'dashboard', component:DashboardComponent},
  {path:'add-vehicles',component:AddvehicleComponent},
  {path:'vehicle-list',component:VehicleListComponent},
  {path:'update-vehicle/:id',component:UpdateVehicleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
