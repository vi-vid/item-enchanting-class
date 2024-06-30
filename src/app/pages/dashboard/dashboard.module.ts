import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { DashboardEffects, dashboardReducer, featureKey } from '../../stores/dashboard';

@NgModule({
  declarations: [],
  imports: [CommonModule, DashboardRoutingModule],
  providers: [provideState({ name: featureKey, reducer: dashboardReducer }), provideEffects([DashboardEffects])],
})
export class DashboardModule {}
