import React, { useState } from "react";
import "./item-add-form.css";

export const ItemAddForm = ({ onItemAdded }) => {
  const [label, setLabel] = useState("");

  const onLabelChange = e => {
    setLabel(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    onItemAdded(label);
    setLabel("");
  };
  return (
    <form className="item-add-form d-flex" onSubmit={onSubmit}>
      <input
        className="form-control"
        type="text"
        placeholder="what needs to be done"
        onChange={onLabelChange}
        value={label}
      />
      <button className="btn btn-outline-secondary btn-info color">
        Add_Item
      </button>
    </form>
  );
};
