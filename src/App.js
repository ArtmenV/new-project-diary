import React, { useState } from "react";
import "./App.css";
import { TodoList } from "./components/todo-list";
import { AppHeader } from "./components/app-header";
import { ItemStatusFilter } from "./components/item-status-filter";
import { InputField } from "./components/InputField";

function App() {
  const [toDo, setTodo] = useState([
    { label: "Drink Coffee", important: false, id: 1 },
    { label: "Make Awesome App", important: true, id: 2 },
    { label: "Have a lunch", important: false, id: 3 }
  ]);
  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="search-panel d-flex">
        <div className="search">
          <InputField />
        </div>
        <ItemStatusFilter />
      </div>

      <TodoList todoList={toDo}></TodoList>
    </div>
  );
}

export default App;
