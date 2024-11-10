'use client'

import { useState } from 'react'
import { type ControllerRenderProps, type FieldError } from 'react-hook-form'

import { Form } from '@/components/form'
import { Input } from '@/components/ui/input'
import { ShowAndHideButton } from '@/components/ui/show-and-hide-button'
import { COMPONENT_TEXTS } from '@/locales'

interface PasswordFieldProps<T extends { password: string }> {
  label: string
  field: ControllerRenderProps<T>
  error?: FieldError
  placeholder: string
}

export function PasswordField<T extends { password: string }>({
  label,
  field,
  error,
  placeholder,
}: Readonly<PasswordFieldProps<T>>) {
  const componentTexts = COMPONENT_TEXTS.ShowAndHideButton

  const [showPassword, setShowPassword] = useState(false)

  return (
    <Form.Item>
      <Form.Label>{label}</Form.Label>
      <div className='relative'>
        <Form.Control>
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder={placeholder}
            variant={error && 'error'}
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
