import { createAction, createReducer } from "@reduxjs/toolkit";

interface CounterState {
  count: number;
}

const initialState = { count: 0 } as CounterState;

export const increment = createAction("counter/increment");
export const decrement = createAction("counter/decrement");
export const set = createAction<number>("counter/set");

// export default createReducer(initialState, (builder) => {
//   builder
//     .addCase(increment, (state, action) => {
//       state.count++;
//     })
//     .addCase(decrement, (state, action) => {
//       state.count--;
//     })
//     .addCase(set, (state, action) => {
//       state.count = action.payload;
//     });
// });

export default createReducer(initialState, {
  [increment.type]: (state) => ({ ...state, count: state.count + 1 }),
  [decrement.type]: (state) => ({ ...state, count: state.count - 1 }),
  [set.type]: (state, action) => ({ ...state, count: action.payload }),
});
