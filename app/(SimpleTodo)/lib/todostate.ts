import { create } from 'zustand'

interface TodoState {
    todos: string[]
    addTodo: (todo: string) => void
    removeTodo: (index: number) => void
    editTodo: (index: number, newTodo: string) => void
}

export const useTodoState = create<TodoState>((set) => ({
    todos: [],
    addTodo: (todo) =>
        set((state) => {
            state.todos.push(todo)
            return { todos: state.todos }
        }),
    removeTodo: (index) =>
        set((state) => ({
            todos: state.todos.slice(0, index).concat(state.todos.slice(index + 1)),
        })),
    editTodo: (index, newTodo) =>
        set((state) => ({
            todos: state.todos.map((todo, i) => (i === index ? newTodo : todo)),
        })),
}))
