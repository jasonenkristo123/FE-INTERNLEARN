import { create } from "zustand";

interface CountState {
    count: number;
    increment: (quantity: number) => void;
    decrement: (quantity: number) => void;
}

export const useCountStore = create<CountState>((set) => ({
    count: 0,
    increment: (quantity: number) => set((state) => ({ count: state.count + quantity })),
    decrement: (quantity: number) => set((state) => ({ count: state.count - quantity })),
}))