// Read and write to the store with Provider
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import "./App.scss";

function App() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);

  const decrement = () => dispatch({ type: "counter/decrement" });
  const increment = () => dispatch({ type: "counter/increment" });
  const set = () => {
    dispatch({ type: "counter/set", payload: parseInt(value || "0") });
    setValue("");
  };

  return (
    <div className="App">
      <p className="Counter">{state.counter.count}</p>
      <div>
        <button onClick={decrement}>-1</button>
        <button onClick={increment}>+1</button>
      </div>
      <div>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={set}>SET</button>
      </div>
    </div>
  );
}

export default App;
