'use client'
import { useState } from 'react'
import { useTodoState } from '../lib/todostate'

export default function FormInput() {
  const [todos, setTodos] = useState('')

  return (
    <section className="w-full max-w-3xl py-10 mx-auto container">
      <form className="w-full flex gap-6" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Add new todo"
          className="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          onInput={(e) => setTodos(e.currentTarget.value)}
        />
        <button
          type="submit"
          className="bg-blue-400 rounded-lg px-4 py-2 cursor-pointer hover:bg-blue-500 transition-colors duration-300"
          onClick={() => useTodoState.getState().addTodo(todos)}
        >
          <span className="text-white">Add Todo</span>
        </button>
      </form>
    </section>
  )
}
