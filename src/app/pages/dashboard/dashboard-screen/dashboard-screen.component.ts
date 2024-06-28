import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromDashboard } from '../../../stores/dashboard';

@Component({
  selector: 'app-dashboard-screen',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-screen.component.html',
  styleUrl: './dashboard-screen.component.scss'
})
export class DashboardScreenComponent {
  readonly #store = inject(Store);

  public isLoading = this.#store.selectSignal(fromDashboard.selectIsLoading$);
}
