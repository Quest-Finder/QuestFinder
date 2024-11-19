import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { useToast } from '@/components/ui/toast'
import { ROUTES } from '@/constants'
import {
  signUpDefaultValues,
  type SignUpFormSchema,
  signUpFormSchema,
} from '@/helpers/auth'
import { SIGN_UP_TEXTS } from '@/locales'

export function useSignUpForm() {
  const formTexts = SIGN_UP_TEXTS.SignUpForm

  const router = useRouter()
  const { toast } = useToast()

  const form = useForm<SignUpFormSchema>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: signUpDefaultValues,
    mode: 'onBlur',
  })

  const {
    isValid: isFormValid,
    isSubmitting,
    errors: {
      email: emailError,
      password: passwordError,
      password_confirmation: passwordConfirmationError,
      root: formError,
    },
  } = form.formState

  function triggerOnChange(field: keyof SignUpFormSchema) {
    form.trigger(field)
  }

  function signUpWithEmail({ email, consent }: SignUpFormSchema): void {
    if (!consent) {
      return
    }

    // TODO: integrate with API when it's ready.
    // The code below is just an example. It'll be changed when the endpoint is available.

    if (email === 'sucesso@teste.com') {
      toast({ variant: 'success', title: formTexts.messages.success })
      form.reset()
      router.push(ROUTES.auth.signIn)
      return
    }

    form.setError('root', {
      type: 'api_error',
      message: formTexts.messages.errors.alreadyRegistered,
    })
    form.setFocus('email')
  }

  return {
    form,
    emailError,
    passwordError,
    passwordConfirmationError,
    formError,
    isFormValid,
    isSubmitting,
    triggerOnChange,
    signUpWithEmail,
  }
}
