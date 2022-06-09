import { createAction, createReducer } from "@reduxjs/toolkit";

export enum LoadingState {
  IDLE = "idle",
  LOADING = "loading",
  DONE = "done",
  ERROR = "error",
}

const initialState = LoadingState.IDLE;

export default (prefix: string) => {
  const loading = createAction(`${prefix}/loading`);
  const done = createAction(`${prefix}/done`);
  const error = createAction(`${prefix}/error`);

  const reducer = createReducer(initialState, {
    [loading.type]: () => LoadingState.LOADING,
    [done.type]: () => LoadingState.DONE,
    [error.type]: () => LoadingState.ERROR,
  });

  return {
    actions: {
      loading,
      done,
    },
    reducer,
  };
};
