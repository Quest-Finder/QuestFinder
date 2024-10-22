import type { InterestType } from '@/@types'
import { REGISTER_PROFILE_TEXTS } from '@/locales'

type InterestOption = {
  id: InterestType
  title: string
}

const optionTexts = REGISTER_PROFILE_TEXTS.User.UserForm.interest.options

export const interestOptions: InterestOption[] = [
  {
    id: 'game-master',
    title: optionTexts.gameMaster,
  },
  {
    id: 'player',
    title: optionTexts.player,
  },
  {
    id: 'game-master-and-player',
    title: optionTexts.gameMasterAndPlayer,
  },
]
