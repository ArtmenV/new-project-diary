import React, { useState } from "react";

export const InputField = () => {
  const state = {
    term: ""
  };
  const [chip, onChip] = useState(state);

  const onTermChange = e => {
    onChip({ term: e.target.value });
  };
  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="type to search"
      value={chip.term}
      onChange={onTermChange}
    />
  );
};
