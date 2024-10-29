'use client'

import { Loader2 } from 'lucide-react'

import { Form } from '@/components/form'
import { Alert } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ShowAndHideButton } from '@/components/ui/show-and-hide-button'
import { PASSWORD_MIN_LENGTH } from '@/helpers/auth'
import { useNewPasswordForm } from '@/hooks/auth'
import { NEW_PASSWORD_TEXTS } from '@/locales'

import { PasswordRequirements } from './password-requirements'

export function NewPasswordForm() {
  const formTexts = NEW_PASSWORD_TEXTS.NewPasswordForm

  const {
    showPassword,
    setShowPassword,
    showPasswordConfirmation,
    setShowPasswordConfirmation,
    form,
    passwordRequirements,
    passwordConfirmationError,
    formError,
    passwordStatus,
    isFormValid,
    isSubmitting,
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
            <Form.Item>
              <Form.Label>{formTexts.password.label}</Form.Label>
              <div className='relative'>
                <Form.Control>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    variant={passwordStatus}
                    placeholder={formTexts.password.placeholder}
                    className='pr-10'
                    {...field}
                    // Override default behaviour to validate on "onChange".
                    onChange={e => {
                      field.onChange(e)
                      form.trigger('password')
                    }}
                  />
                </Form.Control>
                <ShowAndHideButton
                  title={formTexts.password.showButton}
                  show={showPassword}
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
              {passwordStatus === 'success' ? (
                <Form.Message variant='success'>
                  {formTexts.password.messages.sucess}
                </Form.Message>
              ) : (
                <Form.Message variant={passwordStatus} />
              )}
              <Form.Description
                as='div'
                className='space-y-1 text-xs'
              >
                <p>{formTexts.password.description}</p>
                <PasswordRequirements requirements={passwordRequirements} />
              </Form.Description>
            </Form.Item>
          )}
        />

        <Form.Field
          name='password_confirmation'
          control={form.control}
          render={({ field }) => (
            <Form.Item>
              <Form.Label>{formTexts.passwordConfirmation.label}</Form.Label>
              <div className='relative'>
                <Form.Control>
                  <Input
                    type={showPasswordConfirmation ? 'text' : 'password'}
                    variant={passwordConfirmationError && 'error'}
                    placeholder={formTexts.passwordConfirmation.placeholder}
                    className='pr-10'
                    {...field}
                    // Override default behaviour to validate on "onChange" and trigger it only after value reaches the minimum length.
                    onChange={e => {
                      field.onChange(e)
                      if (e.target.value.length >= PASSWORD_MIN_LENGTH) {
                        form.trigger('password_confirmation')
                      }
                    }}
                  />
                </Form.Control>
                <ShowAndHideButton
                  title={formTexts.password.showButton}
                  show={showPasswordConfirmation}
                  onClick={() =>
                    setShowPasswordConfirmation(!showPasswordConfirmation)
                  }
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
