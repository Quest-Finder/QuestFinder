import type { Metadata } from 'next'
import Image from 'next/image'

import logoFull from '@/assets/branding/logo-full-white.svg'
import logoShort from '@/assets/branding/logo-short-white.svg'
import backgroundImage from '@/assets/images/onboarding-image.jpg'
import { NavButton } from '@/components/ui/nav-button'
import { ROUTES } from '@/constants'

import texts from './locales/pt-BR.json'

const ONBOARDING_TEXTS = texts.OnboardingPage

export const metadata: Metadata = {
  title: ONBOARDING_TEXTS.meta.title,
  description: ONBOARDING_TEXTS.meta.description,
}

export default function SignUpPage() {
  return (
    <div className='relative flex min-h-svh items-center bg-violet-950 py-12'>
      <main className='container z-10 flex max-w-2xl flex-col items-center gap-12'>
        <Image
          src={logoFull}
          alt='Tem Vaga Mestre?'
          className='w-full max-md:hidden'
        />
        <Image
          src={logoShort}
          alt='Tem Vaga Mestre?'
          className='w-full max-w-64 sm:max-w-80 md:hidden'
        />

        <article className='space-y-5 rounded-3xl border border-neutral-600/60 bg-neutral-900/60 p-8 text-center text-foreground-accent backdrop-blur-sm md:space-y-8 md:p-12'>
          <h2 className='text-2xl font-bold md:text-5xl'>
            {ONBOARDING_TEXTS.title}
          </h2>
          <p className='text-lg md:text-2xl'>{ONBOARDING_TEXTS.content}</p>
          <NavButton
            href={ROUTES.register.profile.user}
            size='lg'
            className='max-md:h-10 max-md:w-full max-md:px-4 max-md:text-base'
          >
            {ONBOARDING_TEXTS.button}
          </NavButton>
        </article>
      </main>

      <Image
        src={backgroundImage}
        alt={ONBOARDING_TEXTS.imageAlt}
        className='absolute size-full object-cover'
        placeholder='blur'
        priority
      />
    </div>
  )
}
