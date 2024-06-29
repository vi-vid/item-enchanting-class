import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FeatureState, featureKey } from "./dashboard.reducer";

export const selectFeature = createFeatureSelector<FeatureState>(featureKey);

const selectIsLoading$ = createSelector(selectFeature, (state) => state.isLoading);
const selectItems$ = createSelector(selectFeature, (state) => state.items);

export const fromDashboard ={
    selectIsLoading$,
    selectItems$,
}