import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FeatureState, featureKey } from "./dashboard.reducer";

export const selectFeature = createFeatureSelector<FeatureState>(featureKey);

const selectIsLoading$ = createSelector(selectFeature, (state) => state.isLoading);

export const fromDashboard ={
    selectIsLoading$,
}