import React from "react";
import { TodoListItem } from "./todo-list-item";

export const TodoList = ({ todoList }) => {
  const items = todoList.map(list => {
    const { id, ...listItem } = list;
    return (
      <li key={id}>
        <TodoListItem {...listItem} />
      </li>
    );
  });

  return <ul>{items}</ul>;
};
