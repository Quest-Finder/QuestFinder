import type { Metadata } from 'next'

import { GameProfileForm, Header } from '@/components/register/profile'
import { REGISTER_PROFILE_TEXTS } from '@/locales'

const gameProfilePageTexts = REGISTER_PROFILE_TEXTS.GameProfile.GameProfilePage

export const metadata: Metadata = {
  title: gameProfilePageTexts.meta.title,
  description: gameProfilePageTexts.meta.description,
}

export default function ProfileGameProfilePage() {
  return (
    <div className='flex w-full flex-col items-center gap-12'>
      <Header.Root>
        <Header.Title>{gameProfilePageTexts.title}</Header.Title>
      </Header.Root>

      <GameProfileForm />
    </div>
  )
}
