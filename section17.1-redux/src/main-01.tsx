// Create store in the classic way
import React from "react";
import ReactDOM from "react-dom/client";
import { AnyAction, createStore } from "redux";
import App from "./App";
import "./index.scss";

interface State {
  count: number;
}

const defaultState = {
  count: 0,
};

const store = createStore((state: State = defaultState, action: AnyAction) => {
  switch (action.type) {
    case "counter/increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "counter/decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    case "counter/set":
      return {
        ...state,
        count: state.count + action.payload,
      };
    default:
      return state;
  }
});

store.dispatch({
  type: "counter/increment",
});

console.log(store.getState());

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
