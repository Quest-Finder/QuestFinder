import { STORAGE_KEYS } from '@/constants'
import { removeItems } from '@/helpers'

export function saveProfile() {
  // TODO: update this function to post data to API.

  removeItems([
    STORAGE_KEYS.profile.social,
    STORAGE_KEYS.profile.about,
    STORAGE_KEYS.profile.address,
    STORAGE_KEYS.profile.gameStyles,
    STORAGE_KEYS.profile.gameProfile,
  ])
}
