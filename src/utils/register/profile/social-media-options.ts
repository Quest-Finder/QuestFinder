import discordIcon from '@/assets/icons/discord-white.svg'
import facebookIcon from '@/assets/icons/facebook-white.svg'
import instagramIcon from '@/assets/icons/instagram.svg'
import tiktokIcon from '@/assets/icons/tiktok.svg'
import twitchIcon from '@/assets/icons/twitch-white.svg'
import { socialMediaBaseUrls } from '@/utils'

const SOCIAL_MEDIA = {
  discord: 'discord',
  facebook: 'facebook',
  instagram: 'instagram',
  tiktok: 'tiktok',
  twitch: 'twitch',
} as const

type SocialMedia = (typeof SOCIAL_MEDIA)[keyof typeof SOCIAL_MEDIA]

type SocialMediaItem = {
  name: SocialMedia
  icon: string
  baseUrl: string
}

export const socialMediaOptions: SocialMediaItem[] = [
  {
    name: SOCIAL_MEDIA.discord,
    icon: discordIcon,
    baseUrl: socialMediaBaseUrls.discord,
  },
  {
    name: SOCIAL_MEDIA.facebook,
    icon: facebookIcon,
    baseUrl: socialMediaBaseUrls.facebook,
  },
  {
    name: SOCIAL_MEDIA.instagram,
    icon: instagramIcon,
    baseUrl: socialMediaBaseUrls.instagram,
  },
  {
    name: SOCIAL_MEDIA.tiktok,
    icon: tiktokIcon,
    baseUrl: socialMediaBaseUrls.tiktok,
  },
  {
    name: SOCIAL_MEDIA.twitch,
    icon: twitchIcon,
    baseUrl: socialMediaBaseUrls.twitch,
  },
]
