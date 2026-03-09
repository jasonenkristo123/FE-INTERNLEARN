'use client'
import Link from 'next/link'
import { signIn, signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react'

export default function Navbar() {
  const { status } = useSession()
  return (
    <nav className="flex justify-between items-center w-full bg-slate-800 px-5 py-2 text-slate-200">
      <div className="flex gap-5 ">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="flex gap-5">
        {status === 'authenticated' ? (
          <button
            className="hover:text-slate-400 bg-blue-800 rounded-md px-3 py-2 "
            onClick={() => signOut()}
          >
            Log out
          </button>
        ) : (
          <button
            className="hover:text-slate-400 bg-green-800 rounded-md px-3 py-2"
            onClick={() => signIn('credentials', { callbackUrl: '/dashboard' })}
          >
            Sign up
          </button>
        )}
      </div>
    </nav>
  )
}
