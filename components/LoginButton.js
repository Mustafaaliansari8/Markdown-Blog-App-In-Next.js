'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Button } from './ui/button'

export default function LoginButton() {
  const { data: session, status } = useSession()

  if (status === 'loading') return <p>Loading...</p>

  if (session) {
    return (
      <div className="flex items-center gap-4">
        <img 
          src={session.user.image} 
          alt={session.user.name}
          className="w-8 h-8 rounded-full"
        />
        <span>{session.user.name}</span>
        <Button onClick={() => signOut()}>Sign out</Button>
      </div>
    )
  }

  return (
    <Button onClick={() => signIn('google')}>
      Sign in with Google
    </Button>
  )
}