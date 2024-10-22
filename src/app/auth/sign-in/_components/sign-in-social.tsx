'use client'

import { useAuth } from '@clerk/nextjs'
import { Loader2 } from 'lucide-react'
import Image from 'next/image'

import { OAUTH_STRATEGY } from '@/@types'
import discordIcon from '@/assets/icons/discord.svg'
import facebookIcon from '@/assets/icons/facebook.svg'
import googleIcon from '@/assets/icons/google.svg'
import twitchIcon from '@/assets/icons/twitch.svg'
import { Button } from '@/components/ui/button'

import { useSignInSocial } from '../_hooks/use-sign-in-social'

export function SignInSocial() {
  const { isAuthenticating, signInWithSocial } = useSignInSocial()
  const { userId } = useAuth()

  const socialButtons = [
    {
      name: 'Discord',
      icon: discordIcon,
      strategy: OAUTH_STRATEGY.DISCORD,
    },
    {
      name: 'Facebook',
      icon: facebookIcon,
      strategy: OAUTH_STRATEGY.FACEBOOK,
    },
    {
      name: 'Google',
      icon: googleIcon,
      strategy: OAUTH_STRATEGY.GOOGLE,
    },
    {
      name: 'Twitch',
      icon: twitchIcon,
      strategy: OAUTH_STRATEGY.TWITCH,
    },
  ]

  return (
    <section className='flex w-full gap-3 max-xs:flex-col'>
      {socialButtons.map(provider => (
        <Button
          key={provider.name}
          variant='outline'
          className='flex-1'
          onClick={() => signInWithSocial(provider.strategy)}
          disabled={!!userId || !!isAuthenticating}
        >
          {isAuthenticating === provider.strategy ? (
            <>
              <Loader2 className='size-5 animate-spin text-foreground-soft' />
              <span className='sr-only'>{provider.name}</span>
            </>
          ) : (
            <>
              <Image
                src={provider.icon}
                alt={provider.name}
                className='size-5'
              />
              <span className='sr-only'>{provider.name}</span>
            </>
          )}
        </Button>
      ))}
    </section>
  )
}
