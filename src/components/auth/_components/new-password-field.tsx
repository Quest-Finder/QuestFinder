'use client'

import { useState } from 'react'
import { type ControllerRenderProps, type FieldError } from 'react-hook-form'

import { Form } from '@/components/form'
import { Input } from '@/components/ui/input'
import { ShowAndHideButton } from '@/components/ui/show-and-hide-button'
import { checkPasswordRequirements, getPasswordStatus } from '@/helpers/auth'
import { COMPONENT_TEXTS } from '@/locales'

import { PasswordRequirements } from '../password-requirements'

interface NewPasswordFieldProps<T extends { password: string }> {
  label: string
  field: ControllerRenderProps<T>
  triggerOnChange: () => void
  error?: FieldError
  placeholder: string
  description: string
  successMessage: string
}

export function NewPasswordField<T extends { password: string }>({
  label,
  field,
  triggerOnChange,
  error,
  placeholder,
  description,
  successMessage,
}: Readonly<NewPasswordFieldProps<T>>) {
  const componentTexts = COMPONENT_TEXTS.ShowAndHideButton

  const [showPassword, setShowPassword] = useState(false)

  const { value } = field
  const passwordStatus = getPasswordStatus({ value, error })
  const passwordRequirements = checkPasswordRequirements(value)

  return (
    <Form.Item>
      <Form.Label>{label}</Form.Label>
      <div className='relative'>
        <Form.Control>
          <Input
            type={showPassword ? 'text' : 'password'}
            variant={passwordStatus}
            placeholder={placeholder}
            className='pr-10'
            {...field}
            // Override default behaviour to validate on "onChange".
            onChange={e => {
              field.onChange(e)
              triggerOnChange()
            }}
          />
        </Form.Control>
        <ShowAndHideButton
          title={componentTexts.title}
          show={showPassword}
          onClick={() => setShowPassword(!showPassword)}
        />
      </div>
      {passwordStatus === 'success' ? (
        <Form.Message variant='success'>{successMessage}</Form.Message>
      ) : (
        <Form.Message variant={passwordStatus} />
      )}
      <Form.Description
        as='div'
        className='space-y-1 text-xs'
      >
        <p>{description}</p>
        <PasswordRequirements requirements={passwordRequirements} />
      </Form.Description>
    </Form.Item>
  )
}
