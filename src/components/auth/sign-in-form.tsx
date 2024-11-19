'use client'

import { Form } from '@/components/form'
import { Alert } from '@/components/ui/alert'
import { useSignInForm } from '@/hooks/auth'
import { SIGN_IN_TEXTS } from '@/locales'

import { EmailField, PasswordField, SubmitButton } from './_components'

export function SignInForm() {
  const formTexts = SIGN_IN_TEXTS.SignInForm

  const {
    form,
    emailError,
    passwordError,
    formError,
    isFormValid,
    isSubmitting,
    signInWithEmail,
  } = useSignInForm()

  return (
    <Form.Root {...form}>
      <Form.Wrapper onSubmit={form.handleSubmit(signInWithEmail)}>
        <Form.Field
          name='email'
          control={form.control}
          render={({ field }) => (
            <EmailField
              field={field}
              label={formTexts.email.label}
              placeholder={formTexts.email.placeholder}
              error={emailError}
            />
          )}
        />

        <Form.Field
          name='password'
          control={form.control}
          render={({ field }) => (
            <PasswordField
              field={field}
              label={formTexts.password.label}
              placeholder={formTexts.password.placeholder}
              error={passwordError}
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
