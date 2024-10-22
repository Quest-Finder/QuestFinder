import React from 'react'

export type ComboboxOptions = {
  value: string
  label: string
  keyword?: string
}

export type ComboboxContextValue = {
  options: ComboboxOptions[]
  value: string
  onSelectValue: (value: string) => void
}

export const ComboboxContext = React.createContext<ComboboxContextValue>(
  {} as ComboboxContextValue,
)
