import React, { useState } from "react";

export const InputField = props => {
  const [term, setTerm] = useState("");

  const onSearchChange = e => {
    setTerm(e.target.value);
    props.onSearchChange(term);
  };
  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="type to search"
      value={term}
      onChange={onSearchChange}
    />
  );
};
