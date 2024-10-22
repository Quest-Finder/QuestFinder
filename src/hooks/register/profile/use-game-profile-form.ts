'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { ROUTES, STORAGE_KEYS } from '@/constants'
import { getItem, setItem } from '@/helpers'
import {
  gameProfileDefaultValues,
  type GameProfileFormSchema,
  gameProfileFormSchema,
  saveProfile,
} from '@/helpers/register/profile'

export function useGameProfileForm() {
  const storageKey = STORAGE_KEYS.profile.gameProfile
  const [defaultValues, setDefaultValues] = useState<GameProfileFormSchema>(
    gameProfileDefaultValues,
  )

  const router = useRouter()

  useEffect(() => {
    const gameProfileFromStorage = getItem<GameProfileFormSchema>(storageKey)
    if (gameProfileFromStorage) {
      setDefaultValues(gameProfileFromStorage)
    }
  }, [storageKey])

  const form = useForm<GameProfileFormSchema>({
    resolver: zodResolver(gameProfileFormSchema),
    values: defaultValues,
  })

  const {
    watch,
    formState: { isValid: isFormValid },
    handleSubmit,
  } = form

  const selectedGameProfile = watch('gameProfile')

  function saveGameProfile(data: GameProfileFormSchema) {
    setItem(storageKey, data)
    saveProfile()
    return router.push(ROUTES.register.profile.success)
  }

  return {
    form,
    selectedGameProfile,
    isFormValid,
    handleSubmit,
    saveGameProfile,
  }
}
