import { z } from 'zod'

import {
  INTEREST_TYPES,
  type InterestType,
  PRONOUN_TYPES,
  type PronounType,
} from '@/@types'
import { filterBadWords, normalizeText } from '@/helpers'
import { REGISTER_PROFILE_TEXTS } from '@/locales'

export const USER_MAX_LENGTH = 30
export const USERNAME_MAX_LENGTH = 15

const userFormTexts = REGISTER_PROFILE_TEXTS.User.UserForm

export const userFormSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: userFormTexts.name.errors.required,
    })
    .max(USER_MAX_LENGTH)
    .regex(/^[a-zA-ZÀ-ÿ\s'-]*$/, {
      message: userFormTexts.name.errors.specialCharsAndNumbers,
    })
    .regex(/^\S+(\s\S+)+$/, {
      message: userFormTexts.name.errors.fullName,
    })
    .refine(name => !filterBadWords.isProfane(normalizeText(name)), {
      message: userFormTexts.name.errors.badWords,
    }),
  username: z
    .string()
    .min(1, {
      message: userFormTexts.username.errors.required,
    })
    .max(USERNAME_MAX_LENGTH)
    .regex(/^[a-zA-Z0-9'-]*$/, {
      message: userFormTexts.username.errors.specialChars,
    })
    .refine(username => !filterBadWords.isProfane(normalizeText(username)), {
      message: userFormTexts.username.errors.badWords,
    }),
  pronoun: z
    .enum(['', ...PRONOUN_TYPES])
    .refine(data => PRONOUN_TYPES.includes(data as PronounType)),
  interest: z
    .enum(['', ...INTEREST_TYPES])
    .refine(data => INTEREST_TYPES.includes(data as InterestType)),
  dateOfBirth: z.string(),
})

export type UserFormSchema = z.infer<typeof userFormSchema>

export const userDefaultValues: UserFormSchema = {
  name: '',
  username: '',
  pronoun: '',
  interest: '',
  dateOfBirth: '',
}
