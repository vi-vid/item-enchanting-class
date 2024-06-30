import { DashboardItem } from '../../domain/dashboard/dashboard.models';
import { DashboardActions } from './dashboard.actions';
import { createReducer, on } from '@ngrx/store';

export const featureKey = 'dashboard';

export interface AppState {
  [featureKey]: FeatureState;
}

export interface FeatureState {
  isLoading: boolean;
  error?: string;
  items: DashboardItem[];
}

const initialState: FeatureState = {
  isLoading: false,
  items: [],
};

export const dashboardReducer = createReducer(
  initialState,
  on(
    DashboardActions.loadEnchantedItems,
    (state): FeatureState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    DashboardActions.loadEnchantedItemsSuccess,
    (state, { items }): FeatureState => ({
      ...state,
      items,
      error: undefined,
      isLoading: false,
    })
  ),
  on(
    DashboardActions.loadEnchantedItemsError,
    (state, { error }): FeatureState => ({
      ...state,
      error,
      isLoading: false,
    })
  )
);
