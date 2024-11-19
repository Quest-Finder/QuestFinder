'use client'

import { Form } from '@/components/form'
import { Alert } from '@/components/ui/alert'
import { useNewPasswordForm } from '@/hooks/auth'
import { NEW_PASSWORD_TEXTS } from '@/locales'

import {
  ConfirmPasswordField,
  NewPasswordField,
  SubmitButton,
} from './_components'

export function NewPasswordForm() {
  const formTexts = NEW_PASSWORD_TEXTS.NewPasswordForm

  const {
    form,
    formError,
    passwordError,
    passwordConfirmationError,
    isFormValid,
    isSubmitting,
    triggerOnChange,
    saveNewPassword,
  } = useNewPasswordForm()

  return (
    <Form.Root {...form}>
      <Form.Wrapper
        onSubmit={form.handleSubmit(saveNewPassword)}
        className='flex-1'
      >
        <Form.Field
          name='password'
          control={form.control}
          render={({ field }) => (
            <NewPasswordField
              field={field}
              label={formTexts.password.label}
              placeholder={formTexts.password.placeholder}
              description={formTexts.password.description}
              triggerOnChange={() => triggerOnChange('password')}
              error={passwordError}
              successMessage={formTexts.password.messages.sucess}
            />
          )}
        />

        <Form.Field
          name='password_confirmation'
          control={form.control}
          render={({ field }) => (
            <ConfirmPasswordField
              field={field}
              label={formTexts.passwordConfirmation.label}
              placeholder={formTexts.passwordConfirmation.placeholder}
              error={passwordConfirmationError}
            />
          )}
        />

        {formError && (
          <Alert.Root variant='error'>
            <Alert.Description>{formError.message}</Alert.Description>
          </Alert.Root>
        )}

        <SubmitButton
          isFormValid={isFormValid}
          isPending={isSubmitting}
          defaultText={formTexts.submit.default}
          pendingText={formTexts.submit.pending}
        />
      </Form.Wrapper>
    </Form.Root>
  )
}
