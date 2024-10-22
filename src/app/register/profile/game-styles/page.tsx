import type { Metadata } from 'next'

import { GameStylesForm, Header } from '@/components/register/profile'
import { REGISTER_PROFILE_TEXTS } from '@/locales'

const gameStylesPageTexts = REGISTER_PROFILE_TEXTS.GameStyles.GameStylesPage

export const metadata: Metadata = {
  title: gameStylesPageTexts.meta.title,
  description: gameStylesPageTexts.meta.description,
}

export default function ProfileGameStylesPage() {
  return (
    <div className='flex w-full flex-col items-center gap-12'>
      <Header.Root>
        <Header.Title>{gameStylesPageTexts.title}</Header.Title>
      </Header.Root>

      <GameStylesForm />
    </div>
  )
}
