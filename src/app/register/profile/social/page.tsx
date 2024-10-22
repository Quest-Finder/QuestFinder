import type { Metadata } from 'next'

import { Header, SocialForm } from '@/components/register/profile'
import { NavLink } from '@/components/ui/nav-link'
import { ROUTES } from '@/constants'
import { REGISTER_PROFILE_TEXTS } from '@/locales'

const socialPageTexts = REGISTER_PROFILE_TEXTS.Social.SocialPage

export const metadata: Metadata = {
  title: socialPageTexts.meta.title,
  description: socialPageTexts.meta.description,
}

export default function ProfileSocialPage() {
  return (
    <div className='flex w-full flex-col items-center gap-12'>
      <Header.Root>
        <Header.Title>{socialPageTexts.title}</Header.Title>
      </Header.Root>

      <SocialForm />

      <NavLink href={ROUTES.register.profile.about}>
        {socialPageTexts.skip}
      </NavLink>
    </div>
  )
}
