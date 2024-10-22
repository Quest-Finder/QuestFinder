import { z } from 'zod'

import { GAME_PROFILE_TYPES, type GameProfileType } from '@/@types'

export const gameProfileFormSchema = z.object({
  gameProfile: z
    .enum(['', ...GAME_PROFILE_TYPES])
    .refine(data => GAME_PROFILE_TYPES.includes(data as GameProfileType)),
})

export type GameProfileFormSchema = z.infer<typeof gameProfileFormSchema>

export const gameProfileDefaultValues: GameProfileFormSchema = {
  gameProfile: '',
}
