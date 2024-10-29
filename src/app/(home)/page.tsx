import { SignOutButton } from '@/components/sign-out-button'
import { NavButton } from '@/components/ui/nav-button'
import { ROUTES } from '@/constants'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='flex flex-col items-center gap-3'>
        <NavButton href={ROUTES.auth.signIn}>sign-in</NavButton>
        <NavButton href={ROUTES.auth.signUp}>sign-up</NavButton>
        <NavButton href={ROUTES.auth.recoverPassword}>
          recover password
        </NavButton>

        <NavButton href={ROUTES.register.onboarding}>onboarding</NavButton>
        <NavButton href={ROUTES.register.profile.user}>
          register profile
        </NavButton>

        <SignOutButton className='mt-8' />
      </div>
    </main>
  )
}
