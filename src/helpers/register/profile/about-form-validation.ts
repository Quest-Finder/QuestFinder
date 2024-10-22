import { z } from 'zod'

import { filterBadWords, normalizeText } from '@/helpers'
import { REGISTER_PROFILE_TEXTS } from '@/locales'

export const TITLE_MAX_LENGTH = 50
export const BIO_MAX_LENGTH = 500

const aboutFormTexts = REGISTER_PROFILE_TEXTS.About.AboutForm

export const aboutFormSchema = z
  .object({
    title: z
      .string()
      .max(TITLE_MAX_LENGTH)
      .optional()
      .refine(name => !filterBadWords.isProfane(normalizeText(name ?? '')), {
        message: aboutFormTexts.title.errors.badWords,
      }),
    bio: z
      .string()
      .max(BIO_MAX_LENGTH)
      .optional()
      .refine(name => !filterBadWords.isProfane(normalizeText(name ?? '')), {
        message: aboutFormTexts.bio.errors.badWords,
      }),
  })
  .refine(data => {
    const allFieldsAreEmpty = Object.values(data).every(url => url === '')
    return !allFieldsAreEmpty
  })

export type AboutFormSchema = z.infer<typeof aboutFormSchema>

export const aboutDefaultValues: AboutFormSchema = {
  title: '',
  bio: '',
}
