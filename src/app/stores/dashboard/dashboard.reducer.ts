import { createReducer } from "@ngrx/store";

export const featureKey = 'dashboard';

export interface AppState {
    [featureKey]: FeatureState;
}

export interface FeatureState {
    isLoading: boolean;
}

const initialState: FeatureState = {
    isLoading: false
};

export const dashboardReducer = createReducer(
    initialState,
);
