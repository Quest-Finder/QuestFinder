import { z } from 'zod'

export const GAME_STYLES_MIN_LENGTH = 1
export const GAME_STYLES_MAX_LENGTH = 3

export const gameStylesFormSchema = z.object({
  gameStyles: z
    .array(z.string())
    .refine(array => array.length >= GAME_STYLES_MIN_LENGTH)
    .refine(array => array.length <= GAME_STYLES_MAX_LENGTH),
})

export type GameStylesFormSchema = z.infer<typeof gameStylesFormSchema>

export const gameStylesDefaultValues: GameStylesFormSchema = { gameStyles: [] }
