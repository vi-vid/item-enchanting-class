import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { DashboardEffects, dashboardReducer, featureKey } from '../../stores/dashboard';
import { DashboardScreenComponent } from './dashboard-screen/dashboard-screen.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardScreenComponent,
    title: 'IEC | Dashboard',
    providers: [provideState({ name: featureKey, reducer: dashboardReducer }), provideEffects([DashboardEffects])],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
