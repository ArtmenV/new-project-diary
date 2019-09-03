import React from "react";
import "./app-header.css";

export const AppHeader = ({ toDo, done }) => {
  return (
    <div className="app-header d-flex">
      <h1>My Diary</h1>
      <h2>
        {toDo} more todo, {done} done
      </h2>
    </div>
  );
};
