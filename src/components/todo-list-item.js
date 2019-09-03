import React, { useState } from "react";
import "./todo-list-item.css";

export const TodoListItem = ({ label, important, onDeleted }) => {
  const [done, setDone] = useState(false);
  const [importants, setImportants] = useState(false);

  const onLabelClick = () => {
    setDone(!done);
  };

  const onMarkImportant = () => {
    setImportants(!importants);
  };

  let classNames = "todo-list-item";
  if (done) {
    classNames += " done";
  }

  if (importants) {
    classNames += " important";
  }

  return (
    <span className={classNames}>
      <span className="todo-list-item-label" onClick={onLabelClick}>
        {label}
      </span>

      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
        onClick={onDeleted}
      >
        <i className="fa fa-trash-o" />
      </button>

      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right"
        onClick={onMarkImportant}
      >
        <i className="fa fa-exclamation" />
      </button>
    </span>
  );
};
