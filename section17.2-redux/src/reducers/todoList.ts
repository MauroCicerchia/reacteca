import { combineReducers } from "redux";
import {
  createAction,
  createAsyncThunk,
  createReducer,
} from "@reduxjs/toolkit";
import _ from "lodash";
import { RootState } from "../store";
import fetch from "../utils/fetch";
import { errorGenerator, loadingGenerator } from "./generators";
import { Todo, TodoFilter, TodoListState } from "./todoList.d";

// Imported reducers
const {
  actions: { loading, done },
  reducer: loadingReducer,
} = loadingGenerator("todoList");

const {
  actions: { error },
  reducer: errorReducer,
} = errorGenerator("todoList");

// Initial state
const initialState = {
  items: [
    {
      id: Math.random(),
      title: "Comprar LUNA",
      completed: true,
    },
    {
      id: Math.random(),
      title: "Comprar UST",
      completed: false,
    },
  ],
  filter: TodoFilter.ALL,
} as TodoListState;

// Actions
export const set = createAction<Todo[]>("todoList/set");
export const add = createAction<Todo>("todoList/add");
export const remove = createAction<Todo>("todoList/remove");
export const toggle = createAction<Todo>("todoList/toggle");
export const setFilter = createAction<TodoFilter>("todoList/setFilter");

// Thunks/Epics
export const fetchItems = createAsyncThunk(
  "todoList/fetch",
  (payload, { dispatch }) => {
    dispatch(loading());

    return (
      fetch<Todo[]>("https://jsonplaceholder.typicode.com/todos")
        .then((items) => items.slice(0, 4))
        .then((items) =>
          items.map((item) => ({
            ...item,
            title: _.capitalize(item.title),
          }))
        )
        .then((items) => {
          dispatch(set(items));
          dispatch(done());
        })
        // .then(() => Promise.reject("Error"))
        .catch(() => dispatch(error("Ocurrió un error inesperado")))
    );
  }
);

// Reducers
export const itemsReducer = createReducer(initialState.items, {
  [set.type]: (state, action) => action.payload,
  [add.type]: (state, action) => [...state, action.payload],
  [remove.type]: (state, action) =>
    state.filter((item) => item.id !== action.payload.id),
  [toggle.type]: (state, action) =>
    state.map((item) =>
      item.id === action.payload.id
        ? { ...item, completed: !item.completed }
        : item
    ),
});

export const filterReducer = createReducer(initialState.filter, {
  [setFilter.type]: (state, action) => action.payload,
});

// Selectors
export const stateSelector = (state: RootState) => state.todoList;

export const itemsSelector = (state: RootState) => {
  const { items, filter } = state.todoList;

  if (filter === TodoFilter.COMPLETE) {
    return items.filter((item) => item.completed);
  }
  if (filter === TodoFilter.INCOMPLETE) {
    return items.filter((item) => !item.completed);
  }

  return items;
};

// Final export
export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loading: loadingReducer,
  error: errorReducer,
});
