'use client'

import React from 'react'
import { type FieldValues, useFormContext } from 'react-hook-form'

import {
  FormFieldContext,
  type FormFieldContextValue,
  FormItemContext,
  type FormItemContextValue,
} from './form-context'

export function useFormField() {
  const fieldContext: FormFieldContextValue<FieldValues, string> =
    React.useContext(FormFieldContext)
  const itemContext: FormItemContextValue = React.useContext(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error('useFormField should be used within <Form.Field>')
  }

  const { id } = itemContext
  const { name } = fieldContext

  return {
    id,
    name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}
