import {LOGIN, LOGOUT} from './action';
import {Action, createReducer, on} from '@ngrx/store';
import * as ActionStore from './action';

export interface IAppState {
  isLogin: boolean;
}

export const INITIAL_STATE: IAppState = {
  isLogin: false
};
const reducer = createReducer(
  INITIAL_STATE,
  on(ActionStore.LOGIN, (state: IAppState) => {
    return {...state, isLogin: true};
  }),
  on(ActionStore.LOGOUT, (state: IAppState) => {
    return {...state, isLogin: false};
  })
);

export function ActionReducer(state: IAppState | undefined, action: Action) {
  return reducer(state, action);
}
