import TodoItem from "./todoItem"
import { Todo } from "./types"

interface todoListProps {
  todos: Todo[]
}
function TodoList({todos}: todoListProps) {
  const todoList = todos.map(todo => <TodoItem todo={todo}/>)

  return <ul className="flex flex-col items-start gap-8"> {todoList} </ul>
}

export default TodoList
