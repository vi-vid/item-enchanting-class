import { Injectable, Signal, computed, inject } from "@angular/core";
import { DashboardActions, fromDashboard } from "../../../stores/dashboard";
import { Store } from "@ngrx/store";
import { DashboardScreenVM } from "./dashboard-screen.vm";

@Injectable()
export class DashboardScreenService {
    readonly #store = inject(Store);
    
    readonly #isLoading = this.#store.selectSignal(fromDashboard.selectIsLoading$);
    readonly #items = this.#store.selectSignal(fromDashboard.selectItems$);
    readonly #error = this.#store.selectSignal(fromDashboard.selectError$);

    public vm: Signal<DashboardScreenVM> = computed(() => {
        return {
            isLoading: this.#isLoading(),
            items: this.#items(),
            error: this.#error(),
        }
    });

    public loadEnchantedItems() {
        this.#store.dispatch(DashboardActions.loadEnchantedItems());
    }
}
