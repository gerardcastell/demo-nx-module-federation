import { createReducer, on, Action } from '@ngrx/store';

import * as AuthActions from './auth.actions';

export const AUTH_FEATURE_KEY = 'auth';
export interface authState {
  isLogged: boolean;
}
export const initialState: authState = {
  // set initial required properties
  isLogged: false,
};

const authReducer = createReducer(
  initialState,
  on(AuthActions.init, (state) => ({ ...state })),
  on(AuthActions.setAuth, (state, { isLogged }) => ({ ...state, isLogged }))
);

export function reducer(state: authState, action: Action) {
  return authReducer(state, action);
}
