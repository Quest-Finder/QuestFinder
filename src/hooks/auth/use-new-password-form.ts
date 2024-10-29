import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { useToast } from '@/components/ui/toast'
import { ROUTES } from '@/constants'
import {
  checkPasswordRequirements,
  getPasswordStatus,
  newPasswordDefaultValues,
  type NewPasswordFormSchema,
  newPasswordFormSchema,
} from '@/helpers/auth'
import { NEW_PASSWORD_TEXTS } from '@/locales'

export function useNewPasswordForm() {
  const formTexts = NEW_PASSWORD_TEXTS.NewPasswordForm

  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false)

  const { toast } = useToast()
  const router = useRouter()

  const form = useForm<NewPasswordFormSchema>({
    resolver: zodResolver(newPasswordFormSchema),
    defaultValues: newPasswordDefaultValues,
    mode: 'onBlur',
  })

  const passwordValue = form.watch('password')

  const { isValid: isFormValid, isSubmitting } = form.formState
  const {
    password: passwordError,
    password_confirmation: passwordConfirmationError,
    root: formError,
  } = form.formState.errors

  const passwordStatus = getPasswordStatus({
    value: passwordValue,
    error: passwordError,
  })
  const passwordRequirements = checkPasswordRequirements(passwordValue)

  async function saveNewPassword({
    password,
  }: NewPasswordFormSchema): Promise<void> {
    // TODO: integrate with API when it's ready.

    // The code below is just an example. It'll be changed when the endpoint is available.

    if (password === 'Teste123#') {
      toast({
        variant: 'success',
        title: formTexts.messages.success,
      })

      form.reset()
      router.replace(ROUTES.auth.signIn)
      return
    }

    form.setError('root', {
      type: 'api_error',
      message: formTexts.messages.errors.default,
    })
  }

  return {
    showPassword,
    setShowPassword,
    showPasswordConfirmation,
    setShowPasswordConfirmation,
    form,
    passwordRequirements,
    passwordConfirmationError,
    formError,
    passwordStatus,
    isFormValid,
    isSubmitting,
    saveNewPassword,
  }
}
