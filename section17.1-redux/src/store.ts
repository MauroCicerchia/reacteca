import { Middleware, MiddlewareAPI } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { counter, todoList } from "./reducers";

export const store = configureStore({
  reducer: {
    counter: counter,
    todoList: todoList,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
