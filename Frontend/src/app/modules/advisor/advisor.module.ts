import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvisorRoutingModule } from './advisor-routing.module';
import { AdvisordashboardComponent } from './components/advisordashboard/advisordashboard.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [
    AdvisordashboardComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    AdvisorRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FormsModule
  ]
})
export class AdvisorModule { }
