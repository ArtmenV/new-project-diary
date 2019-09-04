import React from "react";
import "./item-status-filter.css";

export const ItemStatusFilter = props => {
  const button = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "done", label: "Done" }
  ];

  const buttons = button.map(({ name, label }) => {
    const isActive = props.filter === name;
    const clazz = isActive ? "btn-info" : "btn-outline-secondary";
    return (
      <button
        type="button"
        className={`btn ${clazz}`}
        key={name}
        onClick={() => props.onFilterChange(name)}
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
};
