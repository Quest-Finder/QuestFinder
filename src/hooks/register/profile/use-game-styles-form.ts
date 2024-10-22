'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { ROUTES, STORAGE_KEYS } from '@/constants'
import { getItem, removeItem, setItem } from '@/helpers'
import {
  GAME_STYLES_MAX_LENGTH,
  gameStylesDefaultValues,
  type GameStylesFormSchema,
  gameStylesFormSchema,
} from '@/helpers/register/profile'

export function useGameStylesForm() {
  const storageKey = STORAGE_KEYS.profile.gameStyles
  const [defaultValues, setDefaultValues] = useState<GameStylesFormSchema>(
    gameStylesDefaultValues,
  )

  const router = useRouter()
  const form = useForm<GameStylesFormSchema>({
    resolver: zodResolver(gameStylesFormSchema),
    values: defaultValues,
  })

  const {
    formState: { isValid: isFormValid },
    handleSubmit,
    reset,
  } = form

  function toggleGameStyle(selected: string[], value: string) {
    const isGameStyleSelected = selected.includes(value)

    return isGameStyleSelected
      ? selected.filter((gameStyle: string) => gameStyle !== value)
      : [...selected, value]
  }

  function disableGameStyleOptions(selected: string[], value: string) {
    return (
      selected.length >= GAME_STYLES_MAX_LENGTH && !selected.includes(value)
    )
  }

  function saveGameStyles(data: GameStylesFormSchema) {
    setItem(storageKey, data)
    return router.push(ROUTES.register.profile.gameProfile)
  }

  function clearGameStyles() {
    reset(gameStylesDefaultValues)
    return removeItem(storageKey)
  }

  useEffect(() => {
    const gameStylesFromStorage = getItem<GameStylesFormSchema>(storageKey)
    if (gameStylesFromStorage) {
      setDefaultValues(gameStylesFromStorage)
    }
  }, [storageKey])

  return {
    form,
    isFormValid,
    toggleGameStyle,
    disableGameStyleOptions,
    handleSubmit,
    saveGameStyles,
    clearGameStyles,
  }
}
