import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvisordashboardComponent } from './components/advisordashboard/advisordashboard.component';

const routes: Routes = [
  {path: 'advisorDashboard', component:AdvisordashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvisorRoutingModule { }
