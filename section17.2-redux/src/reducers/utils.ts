import { ReducerWithInitialState } from "@reduxjs/toolkit/dist/createReducer";

export const reduceReducers =
  (...reducers: ReducerWithInitialState<any>[]) =>
  (state: any, action: any): any =>
    reducers.reduce(
      (previousState, reducer) => reducer(previousState, action),
      state
    );
