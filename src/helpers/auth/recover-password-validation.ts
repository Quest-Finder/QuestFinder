import { z } from 'zod'

import { RECOVER_PASSWORD_TEXTS } from '@/locales'

const formTexts = RECOVER_PASSWORD_TEXTS.RecoverPasswordForm

export const recoverPasswordFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: formTexts.email.messages.required })
    .email({ message: formTexts.email.messages.invalid }),
})

export type RecoverPasswordFormSchema = z.infer<
  typeof recoverPasswordFormSchema
>

export const recoverPasswordDefaultValues: RecoverPasswordFormSchema = {
  email: '',
}
