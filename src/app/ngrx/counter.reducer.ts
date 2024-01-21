import { createReducer, on } from '@ngrx/store';
import { decrement, increment } from './counter.actions';

export const counterReducer = createReducer(
  10,
  on(increment, (state) => ++state),
  on(decrement, (state) => --state)
);
