import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardScreenComponent } from './dashboard-screen/dashboard-screen.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardScreenComponent,
    title: 'item enchanting class | dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
