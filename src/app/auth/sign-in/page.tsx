import type { Metadata } from 'next'
import Image from 'next/image'
import { redirect } from 'next/navigation'

import { isAuthenticated } from '@/actions/auth'
import logo from '@/assets/branding/logo-short.svg'
import signInImage from '@/assets/images/sign-in-image.jpg'
import { SignInForm, SignInSocial } from '@/components/auth'
import { NavLink } from '@/components/ui/nav-link'
import { ROUTES } from '@/constants'
import { SIGN_IN_TEXTS } from '@/locales'

const pageTexts = SIGN_IN_TEXTS.SignInPage

export const metadata: Metadata = {
  title: pageTexts.meta.title,
  description: pageTexts.meta.description,
}

export default async function SignInPage() {
  if (await isAuthenticated()) {
    redirect('/')
  }

  return (
    <>
      <main className='w-full space-y-8 bg-background p-8 xs:p-12 md:max-w-[27rem] lg:max-w-lg'>
        <header className='flex flex-wrap items-center justify-between gap-x-6 gap-y-4 max-xs:justify-center'>
          <Image
            src={logo}
            alt='Tem Vaga Mestre?'
            className='w-28'
          />
          <div className='text-sm'>
            {pageTexts.notRegistered}{' '}
            <NavLink href={ROUTES.auth.signUp}>{pageTexts.signUpLink}</NavLink>
          </div>
        </header>

        <h1 className='text-center text-3xl font-bold text-foreground-hard max-sm:text-center'>
          {pageTexts.title}
        </h1>

        <SignInForm />

        <div className='relative'>
          <p className='relative z-10 mx-auto w-fit bg-background px-2 text-xs font-medium uppercase leading-none text-foreground-support'>
            {pageTexts.continueWith}
          </p>
          <hr className='absolute top-[0.3rem] w-full border-border' />
        </div>

        <SignInSocial />
      </main>
      <div className='relative overflow-hidden bg-primary max-md:h-96 max-sm:h-48 md:flex-1'>
        <Image
          src={signInImage}
          alt={pageTexts.imageAlt}
          className='absolute size-full object-cover'
          placeholder='blur'
          priority
        />
      </div>
    </>
  )
}
