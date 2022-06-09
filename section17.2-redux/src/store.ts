import { AnyAction, Middleware, MiddlewareAPI } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { counter, todoList } from "./reducers";

export const asyncMiddleware: Middleware = (store) => (next) => (action) => {
  if (typeof action === "function") {
    return action(store.dispatch, store.getState);
  }

  return next(action);
};

export const store = configureStore({
  reducer: {
    counter: counter,
    todoList: todoList,
  },
  // middleware: [asyncMiddleware],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
