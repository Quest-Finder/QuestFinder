import { z } from 'zod'

import { SIGN_UP_TEXTS } from '@/locales'

import { PASSWORD_MIN_LENGTH, PASSWORD_REGEX } from './password-requirements'

const formTexts = SIGN_UP_TEXTS.SignUpForm

export const signUpFormSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: formTexts.email.messages.required })
      .email({ message: formTexts.email.messages.invalid }),
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
    consent: z.boolean(),
  })
  .refine(data => data.password === data.password_confirmation, {
    message: formTexts.passwordConfirmation.errors.mismatch,
    path: ['password_confirmation'],
  })
  .refine(data => data.consent === true, {
    message: formTexts.consent.error,
    path: ['consent'],
  })

export type SignUpFormSchema = z.infer<typeof signUpFormSchema>

export const signUpDefaultValues: SignUpFormSchema = {
  email: '',
  password: '',
  password_confirmation: '',
  consent: false,
}
