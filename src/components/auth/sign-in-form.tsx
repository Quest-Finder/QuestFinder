'use client'

import { Loader2 } from 'lucide-react'

import { Form } from '@/components/form'
import { Alert } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ShowAndHideButton } from '@/components/ui/show-and-hide-button'
import { useSignInForm } from '@/hooks/auth'
import { SIGN_IN_TEXTS } from '@/locales'

export function SignInForm() {
  const formTexts = SIGN_IN_TEXTS.SignInForm

  const {
    showPassword,
    setShowPassword,
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

        <Form.Field
          name='password'
          control={form.control}
          render={({ field }) => (
            <Form.Item>
              <Form.Label>{formTexts.password.label}</Form.Label>
              <div className='relative'>
                <Form.Control>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    variant={passwordError && 'error'}
                    placeholder={formTexts.password.placeholder}
                    className='pr-10'
                    {...field}
                  />
                </Form.Control>
                <ShowAndHideButton
                  title={formTexts.password.showButton}
                  show={showPassword}
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
              <Form.Message />
            </Form.Item>
          )}
        />

        {formError && (
          <Alert.Root variant='error'>
            <Alert.Description>{formError.message}</Alert.Description>
          </Alert.Root>
        )}

        <Button
          type='submit'
          className='mt-4 w-full'
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
