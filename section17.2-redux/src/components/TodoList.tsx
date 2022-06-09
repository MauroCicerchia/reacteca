import React from "react";
import { Todo } from "reducers/todoList.d";

function TodoList({
  items,
  onChange,
}: {
  items: Todo[];
  onChange: (item: Todo) => void;
}) {
  return (
    <ul className="List">
      {items.map((item, index) => (
        <li key={index}>
          <div className="TodoContainer">
            <input
              checked={item.completed}
              className="Checkbox"
              type="checkbox"
              onChange={() => onChange(item)}
            />
            <span
              className={`Title${item.completed ? " Completed" : ""}`}
              onClick={() => onChange(item)}
            >
              {item.title}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
