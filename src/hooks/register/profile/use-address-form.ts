'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { ROUTES, type State, STORAGE_KEYS } from '@/constants'
import { getItem, removeItem, setItem } from '@/helpers'
import {
  addressDefaultValues,
  type AddressFormSchema,
  addressFormSchema,
} from '@/helpers/register/profile'

export function useAddressForm() {
  const storageKey = STORAGE_KEYS.profile.address
  const [defaultValues, setDefaultValues] =
    useState<AddressFormSchema>(addressDefaultValues)

  const router = useRouter()

  useEffect(() => {
    const addressFromStorage = getItem<AddressFormSchema>(storageKey)
    if (addressFromStorage) {
      setDefaultValues(addressFromStorage)
    }
  }, [storageKey])

  const form = useForm<AddressFormSchema>({
    resolver: zodResolver(addressFormSchema),
    values: defaultValues,
  })

  const {
    watch,
    setValue,
    formState: { isValid: isFormValid },
    handleSubmit,
    reset,
  } = form

  const selectedState = form.watch('state') as State
  const liveAbroad = watch('liveAbroad')

  function saveAddress(data: AddressFormSchema) {
    setItem(storageKey, data)
    return router.push(ROUTES.register.profile.gameStyles)
  }

  function clearAddress() {
    reset(addressDefaultValues)
    return removeItem(storageKey)
  }

  return {
    form,
    selectedState,
    liveAbroad,
    isFormValid,
    reset,
    setValue,
    handleSubmit,
    saveAddress,
    clearAddress,
  }
}
