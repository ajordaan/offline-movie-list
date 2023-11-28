import { useEffect, useState } from "react";
import { Todo } from "./types";
import TodoList from "./todoList";
import AddTodoItem from "./AddTodoItem";
import ky from 'ky';

function App() {

  const [todos, setTodos] = useState([] as Todo[])

  const createTodo = async (description: string) => {
    console.log('todo created')
    console.log(description)
    const todo: Todo = { id: 'sdff', description: description, persisted: false, completed: false }

    const json = await ky.post('http://localhost:3000/todos', { json: todo }).json();
    console.log(json)
    setTodos([todo, ...todos])
  }

  const loadTodos = async() => {
    const serverTodos: Todo[] = await ky.get('http://localhost:3000/todos').json();
    console.log(serverTodos)
    setTodos([...serverTodos])
  }
useEffect(() => {
  loadTodos()
  }, []);



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
