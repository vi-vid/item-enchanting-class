import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then((m) => m.DashboardModule),
}];
