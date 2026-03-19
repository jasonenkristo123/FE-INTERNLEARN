'use client'
import { useTodoState } from '../lib/todostate'

export default function Todos() {
  const todos = useTodoState((state) => state.todos)

  return (
    <section className="w-full border-2 max-w-3xl mx-auto container bg-slate-200 rounded-lg border-slate-300 p-4">
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            className="border-2 border-slate-300 rounded-lg p-4 mb-4 bg-slate-100"
          >
            <div className="flex flex-row items-center justify-between">
              <h2>{todo}</h2>
              <div className="flex gap-3">
                <button
                  onClick={() => useTodoState.getState().editTodo(index, todo)}
                >
                  Edit
                </button>
                <button
                  onClick={() => useTodoState.getState().removeTodo(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
