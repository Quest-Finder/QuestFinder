export type PasswordRequirementType = {
  type: 'length' | 'uppercase' | 'lowercase' | 'number' | 'symbols'
  isValid: boolean
}

type SessionUser = {
  id: string
  username: string
  name: string
  profile: string
  avatarUrl: string
}

export interface Session {
  token: string
  refreshToken: string
  onboarding: boolean
  user: SessionUser
}

export const OAUTH_STRATEGY = {
  DISCORD: 'oauth_discord',
  FACEBOOK: 'oauth_facebook',
  GOOGLE: 'oauth_google',
  TWITCH: 'oauth_twitch',
} as const

export type OAuthStrategy = (typeof OAUTH_STRATEGY)[keyof typeof OAUTH_STRATEGY]
