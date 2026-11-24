import React, { useState } from "react"; import { motion, AnimatePresence } from "framer-motion"; import { Plus, Trash2, Check, ListTodo } from "lucide-react";

export default function TodoList() { const [tasks, setTasks] = useState([]); const [input, setInput] = useState("");

const addTask = () => { if (!input.trim()) return;

setTasks([
  ...tasks,
  { id: Date.now(), text: input, completed: false },
]);

setInput("");


};

const toggleTask = (id) => { setTasks( tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task ) ); };

const deleteTask = (id) => { setTasks(tasks.filter((task) => task.id !== id)); };

const completed = tasks.filter((task) => task.completed).length;

return ( <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 flex items-center justify-center p-5">

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-7 shadow-2xl"
  >

    <div className="text-center mb-8">
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="inline-flex p-4 bg-purple-500 rounded-2xl mb-4"
      >
        <ListTodo size={35} color="white" />
      </motion.div>

      <h1 className="text-3xl font-bold text-white">
        My Todo List
      </h1>

      <p className="text-purple-200 mt-2">
        Stay focused. Get things done.
      </p>
    </div>

    <div className="flex gap-2 mb-6">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addTask()}
        placeholder="Add a new task..."
        className="flex-1 min-w-0 bg-white/10 text-white placeholder-purple-200 border border-white/20 rounded-xl px-4 py-3 outline-none focus:border-purple-400 transition"
      />

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.9 }}
        onClick={addTask}
        className="bg-purple-500 hover:bg-purple-600 text-white px-4 rounded-xl"
      >
        <Plus size={24} />
      </motion.button>
    </div>

    <div className="flex justify-between text-sm text-purple-200 mb-4">
      <span>{tasks.length} Tasks</span>
      <span>{completed} Completed</span>
    </div>

    <div className="h-2 bg-white/10 rounded-full mb-6 overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
        animate={{
          width: tasks.length
            ? `${(completed / tasks.length) * 100}%`
            : "0%",
        }}
      />
    </div>

    <div className="space-y-3 max-h-80 overflow-y-auto pr-1">

      <AnimatePresence mode="popLayout">
        {tasks.map((task) => (
          <motion.div
            key={task.id}
            layout
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50, scale: 0.8 }}
            transition={{ duration: 0.25 }}
            className="flex items-center gap-3 bg-white/10 border border-white/10 rounded-xl p-4"
          >

            <motion.button
              whileTap={{ scale: 0.7 }}
              onClick={() => toggleTask(task.id)}
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
                task.completed
                  ? "bg-green-400 border-green-400"
                  : "border-purple-300"
              }`}
            >
              {task.completed && (
                <Check size={16} className="text-white" />
              )}
            </motion.button>

            <span
              className={`flex-1 break-words text-white transition-all ${
                task.completed
                  ? "line-through opacity-40"
                  : ""
              }`}
            >
              {task.text}
            </span>

            <motion.button
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => deleteTask(task.id)}
              className="text-red-300 hover:text-red-500 shrink-0"
            >
              <Trash2 size={19} />
            </motion.button>

          </motion.div>
        ))}
      </AnimatePresence>

      {tasks.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-10 text-purple-200"
        >
          <ListTodo size={40} className="mx-auto mb-3 opacity-50" />
          <p>No tasks yet!</p>
          <p className="text-sm mt-1">Add something to get started ✨</p>
        </motion.div>
      )}

    </div>

    {tasks.length > 0 && (
      <button
        onClick={() => setTasks([])}
        className="w-full mt-6 py-3 rounded-xl bg-white/10 hover:bg-red-500/20 text-purple-200 hover:text-red-300 transition"
      >
        Clear All Tasks
      </button>
    )}

  </motion.div>
</div>
); }