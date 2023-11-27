import { useState } from "react"

interface props {
  onCreateTodo: (description: string) => void
}
function AddTodoItem({onCreateTodo}: props) {

  const [description, setDescription] = useState('')

  return (
    <>
    <div className="p-3 inline-flex justify-around items-center bg-slate-200 bg-opacity-10 rounded gap-3">
      <input onChange={e => setDescription(e.target.value)} className="bg-white text-black rounded" type="text" />
      <button onClick={() => onCreateTodo(description)} className="text-black bg-teal-200 hover:bg-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"> Add </button>
    </div>

    </>
  )
}

export default AddTodoItem
