import { DashboardItem } from '../../domain/dashboard/dashboard.models';
import { DashboardActions } from './dashboard.actions';
import { createReducer, on } from '@ngrx/store';

export const featureKey = 'dashboard';

export interface AppState {
  [featureKey]: FeatureState;
}

export interface FeatureState {
  isLoading: boolean;
  items: DashboardItem[];
}

const initialState: FeatureState = {
  isLoading: false,
  items: []
};

export const dashboardReducer = createReducer(
  initialState,
  on(
    DashboardActions.getEnchantedItems,
    (state): FeatureState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    DashboardActions.getEnchantedItemsSuccess,
    (state, { items }): FeatureState => ({
      ...state,
      items,
      isLoading: false,
    })
  ),
  on(
    DashboardActions.getEnchantedItemsError,
    (state): FeatureState => ({
      ...state,
      isLoading: false,
    })
  )
);
