import { z } from 'zod'

import { REGISTER_PROFILE_TEXTS } from '@/locales'
import { socialMediaBaseUrls } from '@/utils'

const socialFormTexts = REGISTER_PROFILE_TEXTS.Social.SocialForm

function validateUrl(baseUrlToCompare: string, url?: string) {
  if (url && url.length > 0) {
    return url?.startsWith(baseUrlToCompare)
  }

  return true
}

export const socialFormSchema = z
  .object({
    discord: z
      .string()
      .optional()
      .refine(url => validateUrl(socialMediaBaseUrls.discord, url), {
        message: socialFormTexts.url.errors.invalid,
      }),
    facebook: z
      .string()
      .optional()
      .refine(url => validateUrl(socialMediaBaseUrls.facebook, url), {
        message: socialFormTexts.url.errors.invalid,
      }),
    instagram: z
      .string()
      .optional()
      .refine(url => validateUrl(socialMediaBaseUrls.instagram, url), {
        message: socialFormTexts.url.errors.invalid,
      }),
    tiktok: z
      .string()
      .optional()
      .refine(url => validateUrl(socialMediaBaseUrls.tiktok, url), {
        message: socialFormTexts.url.errors.invalid,
      }),
    twitch: z
      .string()
      .optional()
      .refine(url => validateUrl(socialMediaBaseUrls.twitch, url), {
        message: socialFormTexts.url.errors.invalid,
      }),
  })
  .refine(data => {
    const allFieldsAreEmpty = Object.values(data).every(url => url === '')
    return !allFieldsAreEmpty
  })

export type SocialFormSchema = z.infer<typeof socialFormSchema>

export const socialDefaultValues: SocialFormSchema = {
  discord: '',
  facebook: '',
  instagram: '',
  tiktok: '',
  twitch: '',
}
