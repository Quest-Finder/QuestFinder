import type { Metadata } from 'next'

import { Header, UserForm } from '@/components/register/profile'
import { REGISTER_PROFILE_TEXTS } from '@/locales'

const userPageTexts = REGISTER_PROFILE_TEXTS.User.UserPage

export const metadata: Metadata = {
  title: userPageTexts.meta.title,
  description: userPageTexts.meta.description,
}

export default function ProfileUserPage() {
  return (
    <div className='flex w-full flex-col items-center gap-12'>
      <Header.Root>
        <Header.Title>{userPageTexts.title}</Header.Title>
      </Header.Root>

      <UserForm />
    </div>
  )
}
