'use client'

import { useCountStore } from '../store/count-state'

export default function Count() {
  const count = useCountStore((state) => state.count)

  return (
    <section className="w-full flex justify-center items-center flex-col gap-4">
      <h1>Count = {count}</h1>
      <button onClick={() => useCountStore.getState().increment(1)}>
        Nambah
      </button>
      <button onClick={() => useCountStore.getState().decrement(1)}>
        Ngurang
      </button>
    </section>
  )
}
