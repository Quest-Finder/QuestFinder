import type { Metadata } from 'next'
import Image from 'next/image'
import { redirect } from 'next/navigation'

import { isAuthenticated } from '@/actions/auth'
import logo from '@/assets/branding/logo-short.svg'
import recoverPasswordImage from '@/assets/images/recover-password-image.jpg'
import { RecoverPasswordForm } from '@/components/auth'
import { NavLink } from '@/components/ui/nav-link'
import { ROUTES } from '@/constants'
import { RECOVER_PASSWORD_TEXTS } from '@/locales'

const pageTexts = RECOVER_PASSWORD_TEXTS.RecoverPasswordPage

export const metadata: Metadata = {
  title: pageTexts.meta.title,
  description: pageTexts.meta.description,
}

export default async function RecoverPasswordPage() {
  if (await isAuthenticated()) {
    redirect('/')
  }

  return (
    <>
      <div className='relative overflow-hidden bg-primary max-md:h-96 max-sm:h-48 md:flex-1'>
        <Image
          src={recoverPasswordImage}
          alt={pageTexts.imageAlt}
          className='absolute size-full object-cover'
          placeholder='blur'
          priority
        />
      </div>
      <main className='flex w-full flex-col gap-8 bg-background p-8 xs:p-12 md:h-[38rem] md:max-w-[27rem] lg:max-w-lg'>
        <header>
          <div className='flex flex-wrap items-center justify-between gap-x-6 gap-y-4 max-xs:justify-center'>
            <Image
              src={logo}
              alt='Tem Vaga Mestre?'
              className='w-28'
            />
            <NavLink
              className='text-sm'
              href={ROUTES.auth.signIn}
            >
              {pageTexts.signInLink}
            </NavLink>
          </div>

          <h1 className='py-8 text-center text-3xl font-bold text-foreground-hard max-sm:text-center'>
            {pageTexts.title}
          </h1>

          <p className='text-center'>{pageTexts.description}</p>
        </header>

        <RecoverPasswordForm />
      </main>
    </>
  )
}
