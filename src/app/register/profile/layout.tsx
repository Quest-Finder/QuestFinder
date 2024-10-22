import { redirect } from 'next/navigation'

import { getSession } from '@/actions/auth'
import { PatternOverlay } from '@/components/ui/pattern-overlay'
import { ROUTES } from '@/constants'

export default async function RegisterProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getSession()

  if (session?.onboarding === false) {
    redirect(ROUTES.dashboard.overview)
  }

  return (
    <div className='relative flex min-h-svh items-center bg-teal-950 p-8'>
      <div className='container z-10 flex min-h-[52rem] rounded-3xl bg-background p-16 px-16 shadow-xl'>
        {children}
      </div>
      <PatternOverlay />
    </div>
  )
}
