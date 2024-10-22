import type { Metadata } from 'next'
import Image from 'next/image'

import badge from '@/assets/badges/destiny.png'
import { Header } from '@/components/register/profile'
import { NavButton } from '@/components/ui/nav-button'
import { ROUTES } from '@/constants'
import { REGISTER_PROFILE_TEXTS } from '@/locales'

const successPageTexts = REGISTER_PROFILE_TEXTS.SuccessPage

export const metadata: Metadata = {
  title: successPageTexts.meta.title,
  description: successPageTexts.meta.description,
}

export default function ProfileSuccessPage() {
  return (
    <div className='flex w-full flex-col items-center gap-12'>
      <Header.Root>
        <Image
          src={badge}
          alt=''
          className='mx-auto'
        />
        <Header.Title>{successPageTexts.title}</Header.Title>
        <Header.Description>
          🎉 {successPageTexts.description}
        </Header.Description>
      </Header.Root>

      <NavButton
        size='lg'
        href={ROUTES.dashboard.overview}
      >
        {successPageTexts.button}
      </NavButton>
    </div>
  )
}
