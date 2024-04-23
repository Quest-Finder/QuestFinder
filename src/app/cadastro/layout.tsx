'use client'

import { MultistepSkeleton } from '@/components/ui/multistep'
import { FormLayout } from '@/features/register-player/player-registration/FormStep1/FormLayout'
import { FormTitleSkeleton } from '@/features/register-player/utils/title-form'
import { PublicRoutes } from '@/services/routers'
import { useUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  const { user, isLoaded } = useUser()
  if (!isLoaded) {
    return (
      <div className='mx-auto min-h-screen max-w-[1440px] pt-6'>
        <MultistepSkeleton size={6} />
        <FormTitleSkeleton />
      </div>
    )
  }
  if (!user) {
    // usuario não autenticado
    return redirect(PublicRoutes.SignIn)
  }

  // aqui vai verificar se o usuario esta cadastrado no nosso DB
  const userRegistration = false

  if (userRegistration) {
    // usuario autenticado e registrado no nosso DB
    return redirect(PublicRoutes.Home)
  }
  // usuario autenticado e não registrado no nosso DB
  return <FormLayout>{children}</FormLayout>
}