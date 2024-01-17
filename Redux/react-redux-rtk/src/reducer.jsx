import { createReducer } from "@reduxjs/toolkit";
//first argument is initial state
//second argument is an object with key as action type and value as function
// export const customReducer = createReducer({}, {});

const initialState = {
  c: 0,
};
export const customReducer = createReducer(initialState, {
  increment: (state, action) => {
    state.c = state.c + 1;
  },
  incrementByAmount: (state, action) => {
    state.c = state.c + action.payload;
  },
  decrement: (state, action) => {
    state.c = state.c - 1;
  },
  decrementByAmount: (state, action) => {
    state.c = state.c - action.payload;
  },
});
