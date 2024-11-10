'use client'

import { useState } from 'react'
import { type ControllerRenderProps, type FieldError } from 'react-hook-form'

import { Form } from '@/components/form'
import { Input } from '@/components/ui/input'
import { ShowAndHideButton } from '@/components/ui/show-and-hide-button'
import { COMPONENT_TEXTS } from '@/locales'

interface ConfirmPasswordFieldProps<
  T extends { password_confirmation: string },
> {
  label: string
  field: ControllerRenderProps<T>
  error?: FieldError
  placeholder: string
}

export function ConfirmPasswordField<
  T extends { password_confirmation: string },
>({
  label,
  field,
  error,
  placeholder,
}: Readonly<ConfirmPasswordFieldProps<T>>) {
  const componentTexts = COMPONENT_TEXTS.ShowAndHideButton

  const [showPassword, setShowPassword] = useState(false)

  return (
    <Form.Item>
      <Form.Label>{label}</Form.Label>
      <div className='relative'>
        <Form.Control>
          <Input
            type={showPassword ? 'text' : 'password'}
            variant={error && 'error'}
            placeholder={placeholder}
            className='pr-10'
            {...field}
          />
        </Form.Control>
        <ShowAndHideButton
          title={componentTexts.title}
          show={showPassword}
          onClick={() => setShowPassword(!showPassword)}
        />
      </div>
      <Form.Message />
    </Form.Item>
  )
}
