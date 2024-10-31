import type { Metadata } from 'next'
import Image from 'next/image'
import { redirect } from 'next/navigation'

import { isAuthenticated } from '@/actions/auth'
import logo from '@/assets/branding/logo-short.svg'
import signUpImage from '@/assets/images/sign-up-image.jpg'
import { SignUpForm } from '@/components/auth'
import { NavLink } from '@/components/ui/nav-link'
import { ROUTES } from '@/constants'
import { SIGN_UP_TEXTS } from '@/locales'

const pageTexts = SIGN_UP_TEXTS.SignUpPage

export const metadata: Metadata = {
  title: pageTexts.meta.title,
  description: pageTexts.meta.description,
}

export default async function SignUpPage() {
  if (await isAuthenticated()) {
    redirect('/')
  }

  return (
    <>
      <div className='relative overflow-hidden bg-primary max-md:h-96 max-sm:h-48 md:flex-1'>
        <Image
          src={signUpImage}
          alt={pageTexts.imageAlt}
          className='absolute size-full object-cover'
          placeholder='blur'
          priority
        />
      </div>
      <main className='w-full space-y-8 bg-background p-8 xs:p-12 md:max-w-[27rem] lg:max-w-lg'>
        <header className='flex flex-wrap items-center justify-between gap-x-6 gap-y-4 max-xs:justify-center'>
          <Image
            src={logo}
            alt='Tem Vaga Mestre?'
            className='w-28'
          />
          <div className='text-sm'>
            {pageTexts.hasAccount}{' '}
            <NavLink href={ROUTES.auth.signIn}>{pageTexts.signInLink}</NavLink>
          </div>
        </header>

        <h1 className='text-center text-3xl font-bold text-foreground-hard max-sm:text-center'>
          {pageTexts.title}
        </h1>

        <SignUpForm />
      </main>
    </>
  )
}
