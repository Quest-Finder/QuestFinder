'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { ROUTES, STORAGE_KEYS } from '@/constants'
import { getItem, removeItem, setItem } from '@/helpers'
import {
  userDefaultValues,
  type UserFormSchema,
  userFormSchema,
} from '@/helpers/register/profile'

export function useUserForm() {
  const storageKey = STORAGE_KEYS.profile.user
  const [defaultValues, setDefaultValues] =
    useState<UserFormSchema>(userDefaultValues)

  const router = useRouter()

  useEffect(() => {
    const userFromStorage = getItem<UserFormSchema>(storageKey)
    if (userFromStorage) {
      setDefaultValues(userFromStorage)
    }
  }, [storageKey])

  const form = useForm<UserFormSchema>({
    resolver: zodResolver(userFormSchema),
    values: defaultValues,
    mode: 'onBlur',
  })

  const {
    formState: { isValid: isFormValid, errors },
    handleSubmit,
    reset,
  } = form

  const {
    name: nameError,
    username: usernameError,
    dateOfBirth: dateOfBirthErrror,
  } = errors

  function saveUser(data: UserFormSchema) {
    setItem(storageKey, data)
    return router.push(ROUTES.register.profile.social)
  }

  function clearUser() {
    reset(userDefaultValues)
    return removeItem(storageKey)
  }

  return {
    form,
    nameError,
    usernameError,
    dateOfBirthErrror,
    isFormValid,
    handleSubmit,
    saveUser,
    clearUser,
  }
}
