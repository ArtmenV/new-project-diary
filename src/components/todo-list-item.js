import React from "react";

export const TodoListItem = ({ label, important = false }) => {
  const styles = {
    color: important ? "tomato" : "green",
    fontWeight: "bold",
    textDecoration: important ? "line-through" : "none"
  };

  return <span style={styles}>{label}</span>;
};
