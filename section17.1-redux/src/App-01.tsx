// Read and write to the store with Provider
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { decrement, increment, set } from "./reducers/counter";
import "./App.scss";

function App() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);

  const _decrement = () => dispatch(decrement());
  const _increment = () => dispatch(increment());
  const _set = () => {
    dispatch(set(parseInt(value || "0")));
    setValue("");
  };

  return (
    <div className="App">
      <p className="Counter">{state.counter.count}</p>
      <div>
        <button onClick={_decrement}>-1</button>
        <button onClick={_increment}>+1</button>
      </div>
      <div>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={_set}>SET</button>
      </div>
    </div>
  );
}

export default App;
