import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { useToast } from '@/components/ui/toast'
import { ROUTES } from '@/constants'
import {
  newPasswordDefaultValues,
  type NewPasswordFormSchema,
  newPasswordFormSchema,
} from '@/helpers/auth'
import { NEW_PASSWORD_TEXTS } from '@/locales'

export function useNewPasswordForm() {
  const formTexts = NEW_PASSWORD_TEXTS.NewPasswordForm

  const router = useRouter()
  const { toast } = useToast()

  const form = useForm<NewPasswordFormSchema>({
    resolver: zodResolver(newPasswordFormSchema),
    defaultValues: newPasswordDefaultValues,
    mode: 'onBlur',
  })

  const {
    isValid: isFormValid,
    isSubmitting,
    errors: {
      password: passwordError,
      password_confirmation: passwordConfirmationError,
      root: formError,
    },
  } = form.formState

  function triggerOnChange(field: keyof NewPasswordFormSchema) {
    form.trigger(field)
  }

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
    form,
    formError,
    passwordError,
    passwordConfirmationError,
    isFormValid,
    isSubmitting,
    triggerOnChange,
    saveNewPassword,
  }
}
