// Create store in the new way
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./store";
import "./index.scss";

store.dispatch({
  type: "counter/increment",
});
console.log(store.getState());
store.dispatch({
  type: "counter/decrement",
});
console.log(store.getState());
store.dispatch({
  type: "counter/set",
  payload: 5,
});
console.log(store.getState());

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <h1>Chanchito deprimido</h1>
  </React.StrictMode>
);
