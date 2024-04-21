import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdditemsComponent } from './components/additems/additems.component';
import { AddvehicleComponent } from './components/addvehicle/addvehicle.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { UpdateVehicleComponent } from './components/update-vehicle/update-vehicle.component';


@NgModule({
  declarations: [
    AdditemsComponent,
    AddvehicleComponent,
    AdmindashboardComponent,
    DashboardComponent,
    VehicleListComponent,
    UpdateVehicleComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FormsModule
  ]
})
export class AdminModule { }
