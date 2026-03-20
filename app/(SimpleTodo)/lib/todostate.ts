import { create } from 'zustand'

interface TodoState {
    todos: string[]
    editingIndex: number | null

    addTodo: (todo: string) => void
    removeTodo: (index: number) => void
    editTodo: (index: number, newTodo: string) => void
    setEditingIndex: (index: number | null) => void
}

export const useTodoState = create<TodoState>((set) => ({
    todos: [],
    editingIndex: null,

    addTodo: (todo) =>
        set((state) => ({
            todos: [...state.todos, todo], 
        })),

    removeTodo: (index) =>
        set((state) => ({
            todos: state.todos.filter((_, i) => i !== index),
        })),

    editTodo: (index, newTodo) =>
        set((state) => ({
            todos: state.todos.map((todo, i) =>
                i === index ? newTodo : todo
            ),
            editingIndex: null, // selesai edit
        })),

    setEditingIndex: (index) =>
        set(() => ({
            editingIndex: index,
        })),
}))