import type { Metadata } from 'next'

import { AboutForm, Header } from '@/components/register/profile'
import { NavLink } from '@/components/ui/nav-link'
import { ROUTES } from '@/constants'
import { REGISTER_PROFILE_TEXTS } from '@/locales'

const aboutPageTexts = REGISTER_PROFILE_TEXTS.About.AboutPage

export const metadata: Metadata = {
  title: aboutPageTexts.meta.title,
  description: aboutPageTexts.meta.description,
}

export default function ProfileAboutPage() {
  return (
    <div className='flex w-full flex-col items-center gap-12'>
      <Header.Root>
        <Header.Title>{aboutPageTexts.title}</Header.Title>
      </Header.Root>

      <AboutForm />

      <NavLink href={ROUTES.register.profile.address}>
        {aboutPageTexts.skip}
      </NavLink>
    </div>
  )
}
