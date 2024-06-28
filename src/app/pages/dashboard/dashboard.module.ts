import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { provideState, provideStore } from '@ngrx/store';
import { DashboardEffects, featureKey as dashboardFeatureKey, dashboardReducer } from '../../stores/dashboard';
import { EffectsModule, provideEffects } from '@ngrx/effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ],
  providers: [
    provideEffects([DashboardEffects]),
    provideState(dashboardFeatureKey, dashboardReducer)
  ]
})
export class DashboardModule {}
