import React from "react";
import { TodoListItem } from "./todo-list-item";
import "./todo-list.css";

export const TodoList = ({ todoList, onDeleted }) => {
  const items = todoList.map(list => {
    const { id, ...listItem } = list;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem {...listItem} onDeleted={() => onDeleted(id)} />
      </li>
    );
  });

  return <ul className="list-group todo-list">{items}</ul>;
};
