import type { Metadata } from 'next'

import { AddressForm, Header } from '@/components/register/profile'
import { NavLink } from '@/components/ui/nav-link'
import { ROUTES } from '@/constants'
import { REGISTER_PROFILE_TEXTS } from '@/locales'

const adressPageTexts = REGISTER_PROFILE_TEXTS.Address.AddressPage

export const metadata: Metadata = {
  title: adressPageTexts.meta.title,
  description: adressPageTexts.meta.description,
}

export default function ProfileAddressPage() {
  return (
    <div className='flex w-full flex-col items-center gap-12'>
      <Header.Root>
        <Header.Title>{adressPageTexts.title}</Header.Title>
      </Header.Root>

      <AddressForm />

      <NavLink href={ROUTES.register.profile.gameStyles}>
        {adressPageTexts.skip}
      </NavLink>
    </div>
  )
}
