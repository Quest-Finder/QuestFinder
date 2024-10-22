'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { ROUTES, STORAGE_KEYS } from '@/constants'
import { getItem, removeItem, setItem } from '@/helpers'
import {
  aboutDefaultValues,
  type AboutFormSchema,
  aboutFormSchema,
} from '@/helpers/register/profile'

export function useAboutForm() {
  const storageKey = STORAGE_KEYS.profile.about
  const [defaultValues, setDefaultValues] =
    useState<AboutFormSchema>(aboutDefaultValues)

  const router = useRouter()

  useEffect(() => {
    const aboutFromStorage = getItem<AboutFormSchema>(storageKey)
    if (aboutFromStorage) {
      setDefaultValues(aboutFromStorage)
    }
  }, [storageKey])

  const form = useForm<AboutFormSchema>({
    resolver: zodResolver(aboutFormSchema),
    values: defaultValues,
    mode: 'onBlur',
  })

  const {
    formState: { isValid: isFormValid, errors },
    handleSubmit,
    reset,
  } = form

  const { title: titleError, bio: bioError } = errors

  function saveAbout(data: AboutFormSchema) {
    setItem(storageKey, data)
    return router.push(ROUTES.register.profile.address)
  }

  function clearAbout() {
    reset(aboutDefaultValues)
    return removeItem(storageKey)
  }

  return {
    form,
    titleError,
    bioError,
    isFormValid,
    handleSubmit,
    saveAbout,
    clearAbout,
  }
}
