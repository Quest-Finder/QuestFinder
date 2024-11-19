import { useSignIn } from '@clerk/nextjs'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

import type { OAuthStrategy } from '@/@types'
import { ROUTES } from '@/constants'

export function useSignInSocial() {
  const [isAuthenticating, setIsAuthenticating] =
    useState<OAuthStrategy | null>(null)

  const queryParams = useSearchParams()
  const redirectUrl = queryParams.get('redirect_url')
  const { signIn } = useSignIn()

  async function signInWithSocial(strategy: OAuthStrategy): Promise<void> {
    if (!signIn) return

    setIsAuthenticating(strategy)

    const redirectParam = redirectUrl ? `?redirect_url=${redirectUrl}` : ''
    const socialCallbackPath = ROUTES.auth.socialCallback.concat(redirectParam)

    await signIn.authenticateWithRedirect({
      strategy,
      redirectUrl: socialCallbackPath,
      redirectUrlComplete: socialCallbackPath,
    })

    setIsAuthenticating(null)
  }

  return {
    isAuthenticating,
    signInWithSocial,
  }
}
