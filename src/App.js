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
      id: maxId * Math.random().toFixed(6)
    };
  };

  const [toDo, setTodo] = useState([
    createTodoItem("Drink Coffee"),
    createTodoItem("Make Awesome App"),
    createTodoItem("Have a lunch")
  ]);

  const [term, setTerm] = useState("");

  const toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex(el => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  };

  const onToggleDone = id => {
    setTodo(toggleProperty(toDo, id, "done"));
  };

  const onToggleImportant = id => {
    setTodo(toggleProperty(toDo, id, "important"));
  };

  const onSearchChange = term => {
    setTerm(term);
  };

  const deleteItem = id => {
    setTodo(toDo.filter(todo => todo.id !== id));
  };

  const addItem = text => {
    const newItem = createTodoItem(text);
    setTodo([...toDo, newItem]);
  };

  const doneCount = toDo.filter(el => el.done).length;

  const todoCount = toDo.length - doneCount;

  const search = (items, term) => {
    if (term.lenght === 0) {
      return items;
    }

    return items.filter(item => {
      return item.label.indexOf(term) > -1;
    });
  };

  const visibleItem = search(toDo, term);

  return (
    <div className="todo-app">
      <AppHeader toDo={todoCount} done={doneCount} />
      <div className="search-panel d-flex">
        <div className="search">
          <InputField onSearchChange={onSearchChange} />
        </div>
        <ItemStatusFilter />
      </div>

      <TodoList
        todoList={visibleItem}
        onDeleted={deleteItem}
        onToggleDone={onToggleDone}
        onToggleImportant={onToggleImportant}
      ></TodoList>

      <ItemAddForm onItemAdded={addItem} />
    </div>
  );
}

export default App;
