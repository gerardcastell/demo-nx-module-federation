import { createAction, props } from '@ngrx/store';

export const init = createAction('[Auth Page] Init');

export const setAuth = createAction(
  '[Auth/API] Login',
  props<{ isLogged: boolean }>()
);
