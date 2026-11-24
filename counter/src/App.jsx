
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white p-8 rounded-2xl shadow-lg text-center w-80">

        <h1 className="text-3xl font-bold text-blue-600 mb-6">
          Counter App
        </h1>

        <h2 className="text-5xl font-bold text-gray-800 mb-6">
          {count}
        </h2>

        <div className="flex justify-center gap-3">

          <button
            onClick={() => setCount(count + 2)}
            className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg"
          >
            +
          </button>

          <button
            onClick={() => setCount(0)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg"
          >
            Reset
          </button>

          <button
            onClick={() => setCount(count - 1)}
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg"
          >
            -
          </button>

        </div>

      </div>

    </div>
  )
}

export default App
