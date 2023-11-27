import { useState } from "react";
import { Todo } from "./types";
import TodoList from "./todoList";
import AddTodoItem from "./AddTodoItem";

function App() {

  const [todos, setTodos] = useState([] as Todo[])

  const createTodo = (description: string) => {
    console.log('todo created')
    console.log(description)
    const todo: Todo = { id: 'sdff', description: description, persisted: false, completed: false }
    setTodos([todo, ...todos])
  }


  return (
    <>
      <h1 className="p-5 text-center text-3xl font-bold"> TODO List </h1>
      <div className="flex justify-center">
        <AddTodoItem onCreateTodo={createTodo} />
      </div>
      <div className="pt-10 grid place-items-center">
        <TodoList todos={todos} />
      </div>
    </>
  );
}

export default App;
