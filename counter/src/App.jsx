
import { useState } from 'react'

function App() {

  const [task, setTask] = useState('')
  const [todos, setTodos] = useState([])

  const addTask = () => {
    if (task.trim() === '') return

    setTodos([...todos, task])
    setTask('')
  }
  const deleteTask = (index) => {
    setTodos(todos.filter((_, i) => i !== index))
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">

        <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">
          Todo List
        </h1>

        {/* Input Section */}

        <div className="flex gap-2 mb-6">

          <input
            type="text"
            placeholder="Enter your task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 w-full outline-none"
          />

          <button
            onClick={addTask}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Add
          </button>

        </div>
        {/* Task List */}
        <ul className="space-y-3">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 p-3 rounded-lg"
            >

              <span className="text-gray-800">
                {todo}
              </span>

              <button
                onClick={() => deleteTask(index)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
              >
                Delete
              </button>

            </li>

          ))}

        </ul>

        {todos.length === 0 && (
          <p className="text-center text-gray-400">
            No tasks added yet!
          </p>
        )}

        <p className="text-center text-gray-500 mt-5">
          Total Tasks: {todos.length}
        </p>

      </div>

    </div>
  )
}

export default App
