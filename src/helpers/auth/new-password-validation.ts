import { z } from 'zod'

import { NEW_PASSWORD_TEXTS } from '@/locales'

import { PASSWORD_MIN_LENGTH, PASSWORD_REGEX } from './password-requirements'

const formTexts = NEW_PASSWORD_TEXTS.NewPasswordForm

export const newPasswordFormSchema = z
  .object({
    password: z
      .string()
      .min(1, { message: formTexts.password.messages.required })
      .min(PASSWORD_MIN_LENGTH, {
        message: formTexts.password.messages.weak,
      })
      .regex(PASSWORD_REGEX, {
        message: formTexts.password.messages.warning,
      }),
    password_confirmation: z.string(),
  })
  .refine(data => data.password === data.password_confirmation, {
    message: formTexts.passwordConfirmation.errors.mismatch,
    path: ['password_confirmation'],
  })

export type NewPasswordFormSchema = z.infer<typeof newPasswordFormSchema>

export const newPasswordDefaultValues: NewPasswordFormSchema = {
  password: '',
  password_confirmation: '',
}
