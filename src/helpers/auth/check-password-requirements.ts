import type { PasswordRequirementType } from '@/@types'

import { PASSWORD_MIN_LENGTH } from './password-requirements'

export function checkPasswordRequirements(
  value: string,
): PasswordRequirementType[] {
  const UPPERCASE_REGEX = /^(?=.*[A-Z]).*$/
  const LOWERCASE_REGEX = /^(?=.*[a-z]).*$/
  const NUMBER_REGEX = /^(?=.*\d).*$/
  const SPECIAL_CHAR_REGEX = /^(?=.*\W).*$/

  return [
    { type: 'length', isValid: value.length >= PASSWORD_MIN_LENGTH },
    { type: 'uppercase', isValid: UPPERCASE_REGEX.test(value) },
    { type: 'lowercase', isValid: LOWERCASE_REGEX.test(value) },
    { type: 'number', isValid: NUMBER_REGEX.test(value) },
    { type: 'symbols', isValid: SPECIAL_CHAR_REGEX.test(value) },
  ]
}
