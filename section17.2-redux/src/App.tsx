// useSelector to apply filters
import _ from "lodash";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";
import "./App.scss";
import { add, fetchItems, setFilter, toggle } from "./reducers/todoList";
import { Todo, TodoFilter } from "./reducers/todoList.d";
import TodoList from "./components/TodoList";
import WithLoading from "./components/WithLoading";

function App() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const state = useSelector((state: RootState) => {
    const { items, filter, loading, error } = state.todoList;
    let filteredItems = items;

    if (filter === TodoFilter.COMPLETE) {
      filteredItems = items.filter((item) => item.completed);
    }
    if (filter === TodoFilter.INCOMPLETE) {
      filteredItems = items.filter((item) => !item.completed);
    }

    return { items: filteredItems, loading, error };
  });

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value.trim()) return;
    dispatch(
      add({
        id: Math.random(),
        title: value.trim(),
        completed: false,
      })
    );
    setValue("");
  };

  const _toggle = (item: Todo) => {
    dispatch(toggle(item));
  };

  const _setFilter = (filter: TodoFilter) => {
    dispatch(setFilter(filter));
  };

  const fetch = () => {
    dispatch(fetchItems());
  };

  const { items, loading, error } = state;

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
        <button onClick={() => _setFilter(TodoFilter.ALL)}>Todos</button>
        <button onClick={() => _setFilter(TodoFilter.COMPLETE)}>
          Completos
        </button>
        <button onClick={() => _setFilter(TodoFilter.INCOMPLETE)}>
          Incompletos
        </button>
      </div>
      <button onClick={() => fetch()}>Fetch</button>
      <WithLoading error={error} loading={loading}>
        <TodoList items={items} onChange={_toggle} />
      </WithLoading>
    </div>
  );
}

export default App;
