import { useEffect, useState } from "react";
import "./App.css";
import ListItem from "./components/ListItem/ListItem.tsx";
import { TodoItem } from "./TodoItems.ts";

const storedTodoState = JSON.parse(
  localStorage.getItem("todoState") || "[]"
) as TodoItem[];

//Find max id
const findMaxId = (todos: TodoItem[]) => {
  let maxId = 0;
  todos.forEach((todos) => {
    if (todos.id > maxId) {
      maxId = todos.id;
    }
  });
  return maxId;
};

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoState, setTodoState] = useState(storedTodoState);
  //const [checked, setChecked] = useState(false);

  const checkedItem = (id: number) => {
    const newUseState = todoState.map((item) => {
      const itemId = item.id;
      if (itemId === id) {
        const checked = !item.checked;
        return { ...item, checked };
      } else {
        return item;
      }
    });
    setTodoState(newUseState);
  };

  const deleteItem = (id: number) => {
    const newTodoState = todoState.filter((item) => item.id !== id);
    setTodoState(newTodoState);
  };

  useEffect(() => {
    localStorage.setItem("todoState", JSON.stringify(todoState));
  }, [todoState]);

  const onChangeInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const addNewItem = () => {
    const newItem = {
      text: inputValue,
      checked: false,
      id: findMaxId(todoState) + 1,
    };
    const newTodoState = [...todoState, newItem];
    setTodoState(newTodoState);
    setInputValue("");
  };
  return (
    <div className="todo-content">
      <div className="todo-header">Todo List</div>
      <div className="todo-body">
        <input
          type="text"
          value={inputValue}
          onChange={onChangeInputText}
          placeholder="Enter your new Task"
          className="todo-input"
        />
        <button className="button add-task-button" onClick={addNewItem}>
          Add new task
        </button>
        <ul className="todo-list">
          {todoState.map((item) => {
            return (
              <ListItem
                id={item.id}
                onDelete={deleteItem}
                onCheck={checkedItem}
                text={item.text}
                checked={item.checked}
              />
            );
          })}
        </ul>
      </div>
      <br />
    </div>
  );
};

export default App;
