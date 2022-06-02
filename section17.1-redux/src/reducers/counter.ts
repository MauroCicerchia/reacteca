import { createAction, createReducer } from "@reduxjs/toolkit";

interface CounterState {
  count: number;
}

const initialState = { count: 0 } as CounterState;

const increment = createAction("counter/increment");
const decrement = createAction("counter/decrement");
const set = createAction<number>("counter/set");

export default createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.count++;
    })
    .addCase(decrement, (state, action) => {
      state.count--;
    })
    .addCase(set, (state, action) => {
      state.count = action.payload;
    });
});
