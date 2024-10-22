'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { ROUTES, STORAGE_KEYS } from '@/constants'
import { getItem, removeItem, setItem } from '@/helpers'
import {
  socialDefaultValues,
  type SocialFormSchema,
  socialFormSchema,
} from '@/helpers/register/profile'

export function useSocialForm() {
  const storageKey = STORAGE_KEYS.profile.social
  const [defaultValues, setDefaultValues] =
    useState<SocialFormSchema>(socialDefaultValues)

  const router = useRouter()

  useEffect(() => {
    const socialFromStorage = getItem<SocialFormSchema>(storageKey)
    if (socialFromStorage) {
      setDefaultValues(socialFromStorage)
    }
  }, [storageKey])

  const form = useForm<SocialFormSchema>({
    resolver: zodResolver(socialFormSchema),
    values: defaultValues,
    mode: 'onBlur',
  })

  const {
    formState: { isValid: isFormValid, errors: fieldErrors },
    handleSubmit,
    reset,
  } = form

  function saveSocialLinks(data: SocialFormSchema) {
    setItem(storageKey, data)
    return router.push(ROUTES.register.profile.about)
  }

  function clearSocialLinks() {
    reset(socialDefaultValues)
    removeItem(storageKey)
  }

  return {
    form,
    isFormValid,
    fieldErrors,
    handleSubmit,
    saveSocialLinks,
    clearSocialLinks,
  }
}
