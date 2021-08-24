import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AUTH_FEATURE_KEY, authState } from './auth.reducer';

// Lookup the 'Auth' feature state managed by NgRx
export const getAuthState = createFeatureSelector<authState>(AUTH_FEATURE_KEY);


export const getIsLogged = createSelector(
  getAuthState,
  (state: authState) => state?.isLogged
);
