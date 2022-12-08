import React, { useState } from "react";
import TodoTable from "./TodoTable";
import DisplayTodoBoard from "./DisplayTodoBoard";
import CreateTodo from "./CreateTodo";
import { getAllTodos, createTodo } from "../services/TodoService";

const Todos = () => {
  const [todoShelf, setTodoShelf] = useState({});
  const [todos, setTodos] = useState([]);
  const [numberOfTodos, setNumberTodos] = useState(0);

  const handleSubmit = () => {
    createTodo(todoShelf).then(() => {
      setNumberTodos(numberOfTodos + 1);
    });
  };

  const getAllTodo = () => {
    getAllTodos().then((data) => {
      setTodos(data);
      setNumberTodos(data.length);
    });
  };

  const handleOnChangeForm = (e) => {
    let inputData = todoShelf;
    if (e.target.name === "todo") {
      todoShelf.todo = e.target.value;
    } else if (e.target.name === "category") {
      todoShelf.category = e.target.value;
    } else if (e.target.name === "isComplete") {
      todoShelf.isComplete = e.target.checked;
    }
    setTodoShelf(inputData);
  };

  return (
    <div className="main todos">
      
      <CreateTodo
        todoShelf={todoShelf}
        onChangeForm={handleOnChangeForm}
        handleSubmit={handleSubmit}
      />
      <DisplayTodoBoard numberOfTodos={numberOfTodos} getAllTodo={getAllTodo} />
      <TodoTable todos={todos} />
      
    </div>
  );
};

export default Todos;
