import { FeatureState, featureKey } from './dashboard.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectFeature = createFeatureSelector<FeatureState>(featureKey);

const selectIsLoading$ = createSelector(selectFeature, (state) => state.isLoading);
const selectItems$ = createSelector(selectFeature, (state) => state.items);
const selectError$ = createSelector(selectFeature, (state) => state.error);

export const fromDashboard = {
  selectIsLoading$,
  selectItems$,
  selectError$,
};
