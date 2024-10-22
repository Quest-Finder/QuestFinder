export const INTEREST_TYPES = [
  'game-master',
  'player',
  'game-master-and-player',
] as const

export type InterestType = (typeof INTEREST_TYPES)[number]

export const PRONOUN_TYPES = [
  'he/him',
  'she/her',
  'they/them',
  'not-answered',
] as const

export type PronounType = (typeof PRONOUN_TYPES)[number]

export const GAME_PROFILE_TYPES = [
  'exploration',
  'kill-and-loot',
  'role-playing',
] as const

export type GameProfileType = (typeof GAME_PROFILE_TYPES)[number]
