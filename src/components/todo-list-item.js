import React from "react";
import "./todo-list-item.css";

export const TodoListItem = ({ label, important = false }) => {
  const styles = {
    color: important ? "tomato" : "green",
    fontWeight: "bold",
    textDecoration: important ? "line-through" : "none"
  };

  return (
    <span className="todo-list-item">
      <span style={styles}>{label}</span>

      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
      >
        <i className="fa fa-trash-o" />
      </button>

      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right"
      >
        <i className="fa fa-exclamation" />
      </button>
    </span>
  );
};
