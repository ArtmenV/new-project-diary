import React, { useState } from "react";
import "./App.css";
import { TodoList } from "./components/todo-list";
import { AppHeader } from "./components/app-header";
import { ItemStatusFilter } from "./components/item-status-filter";
import { InputField } from "./components/InputField";
import { ItemAddForm } from "./components/item-add-form";

function App() {
  let maxId = 100;

  const createTodoItem = label => {
    return {
      label,
      important: false,
      done: false,
      id: maxId++
    };
  };

  const [toDo, setTodo] = useState([
    createTodoItem("Drink Coffee"),
    createTodoItem("Make Awesome App"),
    createTodoItem("Have a lunch")
  ]);

  const onToggleDone = id => {
    const idx = toDo.findIndex(el => el.id === id);

    const oldItem = toDo[idx];
    const newItem = { ...oldItem, done: !oldItem.done };

    const newArray = [...toDo.slice(0, idx), newItem, ...toDo.slice(idx + 1)];
    console.log(toDo);
    setTodo(newArray);
  };

  const onToggleImportant = id => {
    console.log("toggle important");
  };

  const deleteItem = id => {
    setTodo(toDo.filter(todo => todo.id !== id));
  };

  const addItem = text => {
    const newItem = createTodoItem(text);
    setTodo([...toDo, newItem]);
  };
  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="search-panel d-flex">
        <div className="search">
          <InputField />
        </div>
        <ItemStatusFilter />
      </div>

      <TodoList
        todoList={toDo}
        onDeleted={deleteItem}
        onToggleDone={onToggleDone}
        onToggleImportant={onToggleImportant}
      ></TodoList>

      <ItemAddForm onItemAdded={addItem} />
    </div>
  );
}

export default App;
