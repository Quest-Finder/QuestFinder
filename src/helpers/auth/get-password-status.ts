import type { FieldError } from 'react-hook-form'
import type { ZodIssueCode } from 'zod'

interface GetPasswordStatusProps {
  value?: string
  error?: FieldError
}

type PasswordStatus = 'error' | 'warning' | 'success' | undefined

export function getPasswordStatus({
  value,
  error,
}: GetPasswordStatusProps): PasswordStatus {
  const isValueEmpty = !value || value?.length <= 0

  if (isValueEmpty && !error) {
    return undefined
  }

  if (!error) {
    return 'success'
  }

  const errorType = error?.type as ZodIssueCode

  const errorMessages: Record<string, PasswordStatus> = {
    too_small: 'error',
    invalid_string: 'warning',
  }

  return errorMessages[errorType] ?? undefined
}
