import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import {
  recoverPasswordDefaultValues,
  type RecoverPasswordFormSchema,
  recoverPasswordFormSchema,
} from '@/helpers/auth'
import { RECOVER_PASSWORD_TEXTS } from '@/locales'

export function useRecoverPasswordForm() {
  const formTexts = RECOVER_PASSWORD_TEXTS.RecoverPasswordForm

  const [successMessage, setSuccessMessage] = useState('')

  const form = useForm<RecoverPasswordFormSchema>({
    resolver: zodResolver(recoverPasswordFormSchema),
    defaultValues: recoverPasswordDefaultValues,
    mode: 'onBlur',
  })

  const { isValid: isFormValid, isSubmitting } = form.formState
  const { email: emailError, root: formError } = form.formState.errors

  async function sendRecoverEmail({
    email,
  }: RecoverPasswordFormSchema): Promise<void> {
    // TODO: integrate with API when it's ready.

    // The code below is just an example. It'll be changed when the endpoint is available.

    if (email === 'sucesso@teste.com') {
      setSuccessMessage('E-mail enviado com sucesso.')
      form.reset()
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
    formError,
    isFormValid,
    isSubmitting,
    sendRecoverEmail,
    successMessage,
  }
}
