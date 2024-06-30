import { Component, computed, inject, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { EnchantedItemComponent } from './components/enchanted-item/enchanted-item.component';
import { DashboardScreenService } from './dashboard-screen.service';

@Component({
  selector: 'app-dashboard-screen',
  standalone: true,
  imports: [JsonPipe, EnchantedItemComponent],
  templateUrl: './dashboard-screen.component.html',
  styleUrl: './dashboard-screen.component.scss',
  providers: [DashboardScreenService]
})
export class DashboardScreenComponent {
  readonly #dashboardScreenService = inject(DashboardScreenService);

  public vm = this.#dashboardScreenService.vm;
  public selectedIndex = signal<number | undefined>(undefined);

  public selectedItemId = computed(() => {
    const items = this.vm().items;
    const selectedIndex = this.selectedIndex();
    if (items && selectedIndex !== undefined) {
      return items[selectedIndex].id;
    }
    return undefined;
  });

  constructor() {
    this.#dashboardScreenService.loadEnchantedItems();
  }

  public selectItem(index: number, selected: boolean) {
    this.selectedIndex.set(selected ? index : undefined);
  }

  public onClickRetry() {
    this.#dashboardScreenService.loadEnchantedItems();
  }
}
