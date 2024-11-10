import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { createSession } from '@/actions/auth'
import { getRedirectPathAfterSignIn } from '@/helpers'
import {
  signInDefaultValues,
  type SignInFormSchema,
  signInFormSchema,
} from '@/helpers/auth'
import { SIGN_IN_TEXTS } from '@/locales'

export function useSignInForm() {
  const formTexts = SIGN_IN_TEXTS.SignInForm

  const queryParams = useSearchParams()
  const redirectPath = queryParams.get('redirect_url')
  const router = useRouter()

  const form = useForm<SignInFormSchema>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: signInDefaultValues,
    mode: 'onBlur',
  })

  const {
    isValid: isFormValid,
    isSubmitting,
    errors: { email: emailError, password: passwordError, root: formError },
  } = form.formState

  async function signInWithEmail({
    email,
    password,
  }: SignInFormSchema): Promise<void> {
    // TODO: integrate with API when it's ready.
    // The code below is just an example. It'll be changed when the endpoint is available.

    const sampleUser = {
      token: 'user_token',
      refreshToken: 'user_refresh_token',
      onboarding: false,
      user: {
        id: 'user_id',
        username: 'user_username',
        name: 'user_fullname',
        profile: 'user_profile',
        avatarUrl: 'user_avatar_url',
      },
    }

    if (email === 'sucesso@teste.com' && password === '123') {
      await createSession(JSON.stringify(sampleUser))
      const pathToRedirectAfterSignIn = getRedirectPathAfterSignIn({
        onboarding: sampleUser.onboarding,
        redirectPath,
      })

      router.replace(pathToRedirectAfterSignIn)
      return
    }

    if (email === 'onboarding@teste.com' && password === '123') {
      const session = { ...sampleUser, onboarding: true }
      await createSession(JSON.stringify(session))
      const pathToRedirectAfterSignIn = getRedirectPathAfterSignIn({
        onboarding: session.onboarding,
        redirectPath,
      })

      router.replace(pathToRedirectAfterSignIn)
      return
    }

    form.setError('root', {
      type: 'api_error',
      message: formTexts.messages.errors.default,
    })
    form.setFocus('email')
  }

  return {
    form,
    emailError,
    passwordError,
    formError,
    isFormValid,
    isSubmitting,
    signInWithEmail,
  }
}
