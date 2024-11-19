'use client'

import { Form } from '@/components/form'
import { Alert } from '@/components/ui/alert'
import { Checkbox } from '@/components/ui/checkbox'
import { useSignUpForm } from '@/hooks/auth'
import { SIGN_UP_TEXTS } from '@/locales'

import {
  ConfirmPasswordField,
  EmailField,
  NewPasswordField,
  SubmitButton,
} from './_components'

export function SignUpForm() {
  const formTexts = SIGN_UP_TEXTS.SignUpForm

  const {
    form,
    emailError,
    passwordError,
    passwordConfirmationError,
    formError,
    isFormValid,
    isSubmitting,
    triggerOnChange,
    signUpWithEmail,
  } = useSignUpForm()

  return (
    <Form.Root {...form}>
      <Form.Wrapper onSubmit={form.handleSubmit(signUpWithEmail)}>
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
              error={passwordConfirmationError}
              placeholder={formTexts.password.placeholder}
            />
          )}
        />

        <Form.Field
          name='consent'
          control={form.control}
          render={({ field }) => (
            <Form.Item>
              <Checkbox.Wrapper>
                <Form.Control>
                  <Checkbox.Check
                    title={formTexts.consent.title}
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </Form.Control>
                <Form.Label type='checkbox'>
                  {formTexts.consent.statement}
                </Form.Label>
              </Checkbox.Wrapper>
              <Form.Message />
            </Form.Item>
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
