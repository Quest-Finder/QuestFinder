import type { ControllerRenderProps, FieldError } from 'react-hook-form'

import { Form } from '@/components/form'
import { Input } from '@/components/ui/input'

interface EmailFieldProps<T extends { email: string }> {
  label: string
  field: ControllerRenderProps<T>
  placeholder: string
  error?: FieldError
}

export function EmailField<T extends { email: string }>({
  label,
  field,
  placeholder,
  error,
}: Readonly<EmailFieldProps<T>>) {
  return (
    <Form.Item>
      <Form.Label>{label}</Form.Label>
      <Form.Control>
        <Input
          statusIcon
          type='email'
          inputMode='email'
          autoComplete='email'
          variant={error && 'error'}
          placeholder={placeholder}
          {...field}
        />
      </Form.Control>
      <Form.Message />
    </Form.Item>
  )
}
