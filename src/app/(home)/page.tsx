import { PublicRoutes, RegisterRoutes } from '@/services/routers'
import { SignOutButton } from '@clerk/nextjs'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='flex flex-col gap-3'>
        <Link href={PublicRoutes.SignIn}>sign-in</Link>
        <Link href={PublicRoutes.PlayerProfile}>perfil do jogador</Link>
        <Link href={RegisterRoutes.PlayerData}>Cadastro do jogador</Link>
        <SignOutButton>
          <button>Sign out</button>
        </SignOutButton>
      </div>
    </main>
  )
}
