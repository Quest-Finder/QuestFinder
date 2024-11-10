'use client'

import { Form } from '@/components/form'
import { Alert } from '@/components/ui/alert'
import { useRecoverPasswordForm } from '@/hooks/auth'
import { RECOVER_PASSWORD_TEXTS } from '@/locales'

import { EmailField } from './_components/email-field'
import { SubmitButton } from './_components/submit-button'

export function RecoverPasswordForm() {
  const formTexts = RECOVER_PASSWORD_TEXTS.RecoverPasswordForm

  const {
    form,
    emailError,
    formError,
    isFormValid,
    isSubmitting,
    successMessage,
    sendRecoverEmail,
  } = useRecoverPasswordForm()

  return (
    <Form.Root {...form}>
      <Form.Wrapper
        onSubmit={form.handleSubmit(sendRecoverEmail)}
        className='flex-1'
      >
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

        {successMessage && (
          <Alert.Root variant='success'>
            <Alert.Description>{successMessage}</Alert.Description>
          </Alert.Root>
        )}

        {formError && (
          <Alert.Root
            variant='error'
            className='mt-4 text-center'
          >
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
