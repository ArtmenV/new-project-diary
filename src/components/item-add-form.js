import React from "react";

export const ItemAddForm = ({ onItemAdded }) => {
  return (
    <div className="item-add-form">
      <button
        className="btn btn-outline-secondary"
        onClick={() => onItemAdded("hello world")}
      >
        Add Item
      </button>
    </div>
  );
};
