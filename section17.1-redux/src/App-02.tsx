// Basic Todo List
import _ from "lodash";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import "./App.scss";
import { Todo } from "./reducers/todoList";

function App() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: "todoList/add",
      payload: {
        id: Math.random(),
        title: value,
        complete: false,
      },
    });
    setValue("");
  };

  const toggle = (item: Todo) => {
    dispatch({
      type: "todoList/toggle",
      payload: item,
    });
  };

  return (
    <div className="App">
      <form onSubmit={submit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>
      <div>
        <button>Todos</button>
        <button>Completos</button>
        <button>Incompletos</button>
      </div>
      <ul className="List">
        {state.todoList.items.map((item, index) => (
          <li key={index}>
            <div className="TodoContainer">
              <input
                checked={item.complete}
                className="Checkbox"
                type="checkbox"
                onChange={() => toggle(item)}
              />
              <span
                className={`Title${item.complete ? " Completed" : ""}`}
                onClick={() => toggle(item)}
              >
                {item.title}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
