import { z } from 'zod'

import { SIGN_IN_TEXTS } from '@/locales'

const formTexts = SIGN_IN_TEXTS.SignInForm

export const signInFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: formTexts.email.messages.required })
    .email({ message: formTexts.email.messages.invalid }),
  password: z
    .string()
    .min(1, { message: formTexts.password.messages.required }),
})

export type SignInFormSchema = z.infer<typeof signInFormSchema>

export const signInDefaultValues: SignInFormSchema = {
  email: '',
  password: '',
}
