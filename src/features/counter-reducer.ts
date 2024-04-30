import { createAction, createReducer } from '@reduxjs/toolkit';

type CounterState = { count: number };
type CounterAction =
  | ReturnType<typeof increment>
  | ReturnType<typeof decrement>
  | ReturnType<typeof reset>;

// replaces
// type CounterAction =
//   | { type: 'INCREMENT' | 'DECREMENT'; payload: number }
//   | { type: 'RESET' };

export const increment = createAction('INCREMENT', (amount: number) => {
  return { payload: amount };
});

export const decrement = createAction('DECREMENT', (amount: number) => {
  return { payload: amount };
});

export const reset = createAction('RESET');

// this is actually just a regular reducer!
export const reduxToolKitCounterReducer = createReducer(
  { count: 0 },
  (builder) => {
    builder.addCase(increment, (state, action) => {
      state.count += action.payload; // Immer Writeable Draft; gave copy of current state; mutate all you want
      // it'll do all the readable operations on your behalf
      // pretend they're mutable, but it'll be immutable

      // also you didn't have to return anything!
    });

    builder.addCase(decrement, (state, action) => {
      state.count -= action.payload;
    });

    builder.addCase(reset, (state) => {
      state.count = 0;
    });
  },
);

// the following is exactly the same as above
// but no typing necessary
export const classicReducer = (state: CounterState, action: CounterAction) => {
  if (action.type === increment.type) {
    return { count: state.count + action.payload };
  }

  if (action.type === decrement.type) {
    return { count: state.count - action.payload };
  }

  if (action.type === reset.type) {
    return { count: 0 };
  }

  return state;
};
