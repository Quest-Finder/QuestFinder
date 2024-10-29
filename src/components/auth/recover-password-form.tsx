'use client'

import { Loader2 } from 'lucide-react'

import { Form } from '@/components/form'
import { Alert } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRecoverPasswordForm } from '@/hooks/auth'
import { RECOVER_PASSWORD_TEXTS } from '@/locales'

export function RecoverPasswordForm() {
  const formTexts = RECOVER_PASSWORD_TEXTS.RecoverPasswordForm

  const {
    form,
    emailError,
    formError,
    isFormValid,
    isSubmitting,
    sendRecoverEmail,
    successMessage,
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
            <Form.Item>
              <Form.Label>{formTexts.email.label}</Form.Label>
              <Form.Control>
                <Input
                  statusIcon
                  type='email'
                  inputMode='email'
                  autoComplete='email'
                  variant={emailError && 'error'}
                  placeholder={formTexts.email.placeholder}
                  {...field}
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
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

        <Button
          type='submit'
          className='mt-4 w-full md:mt-auto'
          disabled={!isFormValid || isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className='size-5 animate-spin' />
              {formTexts.submit.pending}
            </>
          ) : (
            formTexts.submit.default
          )}
        </Button>
      </Form.Wrapper>
    </Form.Root>
  )
}
