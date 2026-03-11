'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
    }
  }, [status, router])

  return (
    <section className="w-full flex justify-center items-center flex-col gap-4">
      <h1 className="text-9xl font-bold">Dashboard</h1>
    </section>
  )
}
