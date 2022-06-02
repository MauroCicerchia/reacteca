// Middlewares
import _ from "lodash";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import "./App.scss";
import { Todo, TodoFilter } from "./reducers/todoList";

function App() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => {
    const { items, filter } = state.todoList;

    if (filter === TodoFilter.COMPLETE) {
      return items.filter((item) => item.complete);
    }
    if (filter === TodoFilter.INCOMPLETE) {
      return items.filter((item) => !item.complete);
    }

    return items;
  });

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value.trim()) return;
    dispatch({
      type: "todoList/add",
      payload: {
        id: Math.random(),
        title: value.trim(),
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

  const setFilter = (filter: TodoFilter) => {
    dispatch({
      type: "todoList/setFilter",
      payload: filter,
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
        <button onClick={() => setFilter(TodoFilter.ALL)}>Todos</button>
        <button onClick={() => setFilter(TodoFilter.COMPLETE)}>
          Completos
        </button>
        <button onClick={() => setFilter(TodoFilter.INCOMPLETE)}>
          Incompletos
        </button>
      </div>
      <ul className="List">
        {state.map((item, index) => (
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
