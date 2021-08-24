import { createAction, props } from '@ngrx/store';
import { AuthEntity } from './auth.models';

export const init = createAction('[Auth Page] Init');

export const setAuth = createAction(
  '[Auth/API] Login',
  props<{ auth: AuthEntity }>()
);
