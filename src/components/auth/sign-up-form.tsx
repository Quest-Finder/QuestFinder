'use client'

import { Loader2 } from 'lucide-react'

import { Form } from '@/components/form'
import { Alert } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { ShowAndHideButton } from '@/components/ui/show-and-hide-button'
import { PASSWORD_MIN_LENGTH } from '@/helpers/auth'
import { useSignUpForm } from '@/hooks/auth'
import { SIGN_UP_TEXTS } from '@/locales'

import { PasswordRequirements } from './password-requirements'

export function SignUpForm() {
  const formTexts = SIGN_UP_TEXTS.SignUpForm

  const {
    successMessage,
    showPassword,
    setShowPassword,
    showPasswordConfirmation,
    setShowPasswordConfirmation,
    form,
    passwordRequirements,
    emailError,
    passwordConfirmationError,
    formError,
    passwordStatus,
    isFormValid,
    isSubmitting,
    signUpWithEmail,
  } = useSignUpForm()

  return (
    <Form.Root {...form}>
      <Form.Wrapper onSubmit={form.handleSubmit(signUpWithEmail)}>
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

        {successMessage && (
          <Alert.Root variant='success'>
            <Alert.Description>{successMessage}</Alert.Description>
          </Alert.Root>
        )}

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
