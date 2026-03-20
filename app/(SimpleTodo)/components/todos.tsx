'use client'
import { useTodoState } from '../lib/todostate'
import { useRef, useEffect } from 'react'

export default function Todos() {
  const { todos, removeTodo, editTodo, editingIndex, setEditingIndex } =
    useTodoState()

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (editingIndex !== null) {
      inputRef.current?.focus();
    }
  }, [editingIndex])

  return (
    <section className="w-full border-2 max-w-3xl mx-auto container bg-slate-200 rounded-lg border-slate-300 p-4">
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="p-4 mb-4 bg-slate-100 rounded-lg">
            <div className="flex justify-between items-center">
              {editingIndex === index ? (
                <input
                  ref={inputRef}
                  defaultValue={todo}
                  onBlur={(e) => editTodo(index, e.target.value)}
                  className="border p-2"
                />
              ) : (
                <h2>{todo}</h2>
              )}

              <div className="flex gap-3">
                <button onClick={() => setEditingIndex(index)}>Edit</button>
                <button onClick={() => removeTodo(index)}>Delete</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
