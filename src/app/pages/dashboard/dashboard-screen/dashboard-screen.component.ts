import { Component, HostListener, computed, effect, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { DashboardActions, fromDashboard } from '../../../stores/dashboard';
import { JsonPipe } from '@angular/common';
import { EnchantedItemComponent } from './components/enchanted-item/enchanted-item.component';

@Component({
  selector: 'app-dashboard-screen',
  standalone: true,
  imports: [JsonPipe, EnchantedItemComponent],
  templateUrl: './dashboard-screen.component.html',
  styleUrl: './dashboard-screen.component.scss'
})
export class DashboardScreenComponent {
  readonly #store = inject(Store);

  @HostListener('document:keydown.escape')
  public onClick() {
    this.selectedIndex.set(undefined);
  }

  public isLoading = this.#store.selectSignal(fromDashboard.selectIsLoading$);
  public items = this.#store.selectSignal(fromDashboard.selectItems$);
  public selectedIndex = signal<number | undefined>(undefined);

  public selectedItemId = computed(() => {
    const items = this.items();
    const selectedIndex = this.selectedIndex();
    if (items && selectedIndex !== undefined) {
      return items[selectedIndex].id;
    }
    return undefined;
  });

  constructor() {
    this.#store.dispatch(DashboardActions.getEnchantedItems());
  }

  public selectItem(index: number) {
    this.selectedIndex.set(index);
  }
}
