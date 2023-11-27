import { Todo } from "./types"

interface todoTypeProps {
  todo: Todo
}

function TodoItem({todo}: todoTypeProps) {

  return (
    <>
    <li className="flex bg-slate-200 bg-opacity-10 rounded gap-3 ">
      <label className="p-3 flex gap-3 min-w-[20rem]" htmlFor={todo.id}>
      <input className="w-6 h-6" id={todo.id} type="checkbox" />
      {todo.description}
      </label>
    </li>

    </>
  )
}

export default TodoItem
