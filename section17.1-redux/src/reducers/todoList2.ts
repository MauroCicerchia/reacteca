import { combineReducers } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";

export interface Todo {
  id: number;
  title: string;
  complete: boolean;
}

export enum TodoFilter {
  ALL = "all",
  COMPLETE = "complete",
  INCOMPLETE = "incomplete",
}

export interface TodoListState {
  items: Todo[];
  filter: TodoFilter;
}

const initialState = {
  items: [
    {
      id: Math.random(),
      title: "Comprar LUNA",
      complete: true,
    },
    {
      id: Math.random(),
      title: "Comprar UST",
      complete: false,
    },
  ],
  filter: TodoFilter.ALL,
} as TodoListState;

const add = createAction<Todo>("todoList/add");
const remove = createAction<Todo>("todoList/remove");
const toggle = createAction<Todo>("todoList/toggle");
const setFilter = createAction<TodoFilter>("todoList/setFilter");

export default createReducer(initialState, {
  [add.type]: (state, action) => ({
    ...state,
    items: [...state.items, action.payload],
  }),
  [remove.type]: (state, action) => ({
    ...state,
    items: state.items.filter((item) => item.id !== action.payload.id),
  }),
  [toggle.type]: (state, action) => ({
    ...state,
    items: state.items.map((item) =>
      item.id === action.payload.id
        ? { ...item, complete: !item.complete }
        : item
    ),
  }),
  [setFilter.type]: (state, action) => ({
    ...state,
    filter: action.payload,
  }),
});

// export default createReducer(initialState, (builder) => {
//   builder
//     .addCase(add, (state, action) => {
//       state.items.push(action.payload);
//     })
//     .addCase(remove, (state, action) => {
//       state.items = state.items.filter((item) => item.id !== action.payload.id);
//     })
//     .addCase(toggle, (state, action) => {
//       const item = state.items.find((item) => item.id === action.payload.id);

//       if (item) {
//         item.complete = !item.complete;
//       }
//     })
//     .addCase(setFilter, (state, action) => {
//       state.filter = action.payload;
//     });
// });
