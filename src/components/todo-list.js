import React from "react";
import { TodoListItem } from "./todo-list-item";
import "./todo-list.css";

export const TodoList = ({
  todoList,
  onDeleted,
  onToggleDone,
  onToggleImportant
}) => {
  const items = todoList.map(list => {
    const { id, ...listItem } = list;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...listItem}
          onDeleted={() => onDeleted(id)}
          onToggleDone={() => onToggleDone(id)}
          onToggleImportant={() => onToggleImportant(id)}
        />
      </li>
    );
  });

  return <ul className="list-group todo-list">{items}</ul>;
};
