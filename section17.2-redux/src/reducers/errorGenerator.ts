import { combineReducers, createAction, createReducer } from "@reduxjs/toolkit";

const initialState = "";

export default (prefix: string) => {
  const error = createAction<string>(`${prefix}/error`);
  const dismissError = createAction(`${prefix}/dismissError`);

  const reducer = createReducer(initialState, {
    [error.type]: (state, action) => action.payload,
    [dismissError.type]: () => "",
  });

  return {
    actions: {
      error,
      dismissError,
    },
    reducer,
  };
};
