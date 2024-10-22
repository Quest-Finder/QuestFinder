import type { StaticImageData } from 'next/image'

import type { GameProfileType } from '@/@types'
import sampleImage from '@/assets/badges/destiny.png'
import { REGISTER_PROFILE_TEXTS } from '@/locales'

type GameProfileOption = {
  id: GameProfileType
  image: string | StaticImageData
  title: string
  description: string
}

const optionTexts = REGISTER_PROFILE_TEXTS.GameProfile.GameProfileForm.options

export const gameProfileOptions: GameProfileOption[] = [
  {
    id: 'exploration',
    image: sampleImage,
    title: optionTexts.exploration.title,
    description: optionTexts.exploration.description,
  },
  {
    id: 'kill-and-loot',
    image: sampleImage,
    title: optionTexts.killAndLoot.title,
    description: optionTexts.killAndLoot.description,
  },
  {
    id: 'role-playing',
    image: sampleImage,
    title: optionTexts.rolePlaying.title,
    description: optionTexts.rolePlaying.description,
  },
]
