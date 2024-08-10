import type { Metadata } from 'next'
import Image from 'next/image'

import logo from '@/assets/branding/logo-short.svg'
import { NavLink } from '@/components/ui/nav-link'
import { PatternOverlay } from '@/components/ui/pattern-overlay'
import { PUBLIC_ROUTES } from '@/constants/routes'

import { SignUpForm } from './_components/sign-up-form'
import signUpImage from './assets/sign-up-image.jpg'
import texts from './locales/pt-BR.json'

const t = texts.SignUpPage

export const metadata: Metadata = {
  title: t.meta.title,
  description: t.meta.description,
}

export default function SignUpPage() {
  return (
    <div className='relative flex min-h-svh items-center justify-center bg-player-hard p-4 sm:p-16'>
      <PatternOverlay />
      <div className='z-10 flex max-w-6xl overflow-hidden rounded-4xl max-md:flex-col'>
        <div className='max-md:h-96 max-sm:h-48 md:flex-1'>
          <Image
            src={signUpImage}
            alt={t.imageAlt}
            className='size-full object-cover'
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
              {t.hasAccount}{' '}
              <NavLink href={PUBLIC_ROUTES.SIGN_IN}>{t.signInLink}</NavLink>
            </div>
          </header>

          <h1 className='text-3xl font-bold text-foreground-hard max-sm:text-center'>
            {t.title}
          </h1>

          <SignUpForm />
        </main>
      </div>
    </div>
  )
}