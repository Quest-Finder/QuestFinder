import type { PronounType } from '@/@types'
import { REGISTER_PROFILE_TEXTS } from '@/locales'

type PronounOption = {
  id: PronounType
  title: string
}

const optionTexts = REGISTER_PROFILE_TEXTS.User.UserForm.pronoun.options

export const pronounOptions: PronounOption[] = [
  {
    id: 'he/him',
    title: optionTexts.he,
  },
  {
    id: 'she/her',
    title: optionTexts.she,
  },
  {
    id: 'they/them',
    title: optionTexts.they,
  },
  {
    id: 'not-answered',
    title: optionTexts.notAnswered,
  },
]
