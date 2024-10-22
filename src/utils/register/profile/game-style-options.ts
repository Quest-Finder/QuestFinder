import type { StaticImageData } from 'next/image'

import sampleImage from '@/assets/images/game-styles/sample.jpg'
import { REGISTER_PROFILE_TEXTS } from '@/locales'

type GameStyleOption = {
  id: string
  image: string | StaticImageData
  title: string
  description: string
}
const optionTexts = REGISTER_PROFILE_TEXTS.GameStyles.GameStylesForm.options

export const gameStyleOptions: GameStyleOption[] = [
  {
    id: 'fantasy',
    image: sampleImage,
    title: optionTexts.fantasy.title,
    description: optionTexts.fantasy.description,
  },
  {
    id: 'heroic-fantasy',
    image: sampleImage,
    title: optionTexts.heroicFantasy.title,
    description: optionTexts.heroicFantasy.description,
  },
  {
    id: 'ninja-vs-samurai',
    image: sampleImage,
    title: optionTexts.ninjaVsSamurai.title,
    description: optionTexts.ninjaVsSamurai.description,
  },
  {
    id: 'sword-and-sorcery',
    image: sampleImage,
    title: optionTexts.swordAndSorcery.title,
    description: optionTexts.swordAndSorcery.description,
  },
  {
    id: 'epic-fantasy',
    image: sampleImage,
    title: optionTexts.epicFantasy.title,
    description: optionTexts.epicFantasy.description,
  },
  {
    id: 'mystic-fantasy',
    image: sampleImage,
    title: optionTexts.mysticFantasy.title,
    description: optionTexts.mysticFantasy.description,
  },
  {
    id: 'dark-fantasy',
    image: sampleImage,
    title: optionTexts.darkFantasy.title,
    description: optionTexts.darkFantasy.description,
  },
  {
    id: 'intrigue',
    image: sampleImage,
    title: optionTexts.intrigue.title,
    description: optionTexts.intrigue.description,
  },
  {
    id: 'war',
    image: sampleImage,
    title: optionTexts.war.title,
    description: optionTexts.war.description,
  },
  {
    id: 'mothership',
    image: sampleImage,
    title: optionTexts.mothership.title,
    description: optionTexts.mothership.description,
  },
]
