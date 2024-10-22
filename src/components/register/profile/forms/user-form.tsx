'use client'

import { Form } from '@/components/form'
import { FormRequiredIndicator } from '@/components/ui/form-required-indicator'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import {
  USER_MAX_LENGTH,
  USERNAME_MAX_LENGTH,
} from '@/helpers/register/profile'
import { useUserForm } from '@/hooks/register/profile'
import { REGISTER_PROFILE_TEXTS } from '@/locales'
import { interestOptions, pronounOptions } from '@/utils/register/profile'

import { FormFooter } from './form-footer'

export function UserForm() {
  const userFormTexts = REGISTER_PROFILE_TEXTS.User.UserForm

  const {
    form,
    nameError,
    usernameError,
    dateOfBirthErrror,
    isFormValid,
    handleSubmit,
    saveUser,
    clearUser,
  } = useUserForm()

  return (
    <Form.Root {...form}>
      <Form.Wrapper
        className='flex h-full w-80 flex-col items-center gap-8'
        onSubmit={handleSubmit(saveUser)}
      >
        <Form.Field
          name='name'
          control={form.control}
          render={({ field }) => (
            <Form.Item>
              <Form.Label>
                {userFormTexts.name.label}
                <FormRequiredIndicator />
              </Form.Label>
              <Form.Control>
                <Input
                  statusIcon
                  autoComplete='name'
                  variant={nameError && 'error'}
                  maxLength={USER_MAX_LENGTH}
                  placeholder={userFormTexts.name.placeholder}
                  {...field}
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />

        <Form.Field
          name='username'
          control={form.control}
          render={({ field }) => (
            <Form.Item>
              <Form.Label>
                {userFormTexts.username.label}
                <FormRequiredIndicator />
              </Form.Label>
              <Form.Control>
                <Input
                  statusIcon
                  variant={usernameError && 'error'}
                  maxLength={USERNAME_MAX_LENGTH}
                  placeholder={userFormTexts.username.placeholder}
                  {...field}
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />

        <Form.Field
          name='pronoun'
          control={form.control}
          render={({ field }) => (
            <Form.Item>
              <Form.Label>
                {userFormTexts.pronoun.label}
                <FormRequiredIndicator />
              </Form.Label>
              <Form.Control>
                <Select.Root
                  onValueChange={value => {
                    field.onChange(value)
                  }}
                >
                  <Select.Trigger>
                    <Select.Value
                      placeholder={userFormTexts.interest.placeholder}
                    />
                  </Select.Trigger>
                  <Select.Content>
                    {pronounOptions.map(option => (
                      <Select.Item
                        key={option.id}
                        value={option.id}
                      >
                        {option.title}
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Root>
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />

        <Form.Field
          name='interest'
          control={form.control}
          render={({ field }) => (
            <Form.Item>
              <Form.Label>
                {userFormTexts.interest.label}
                <FormRequiredIndicator />
              </Form.Label>
              <Form.Control>
                <Select.Root
                  onValueChange={value => {
                    field.onChange(value)
                  }}
                >
                  <Select.Trigger>
                    <Select.Value
                      placeholder={userFormTexts.interest.placeholder}
                    />
                  </Select.Trigger>
                  <Select.Content>
                    {interestOptions.map(option => (
                      <Select.Item
                        key={option.id}
                        value={option.id}
                      >
                        {option.title}
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Root>
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />

        <Form.Field
          name='dateOfBirth'
          control={form.control}
          render={({ field }) => (
            <Form.Item>
              <Form.Label>
                {userFormTexts.dateOfBirth.label}
                <FormRequiredIndicator />
              </Form.Label>
              <Form.Control>
                <Input
                  statusIcon
                  variant={dateOfBirthErrror && 'error'}
                  placeholder={userFormTexts.dateOfBirth.placeholder}
                  {...field}
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />

        <FormFooter.Root>
          {isFormValid && <FormFooter.ClearButton onClick={clearUser} />}
          <FormFooter.SubmitButton disabled={!isFormValid} />
        </FormFooter.Root>
      </Form.Wrapper>
    </Form.Root>
  )
}
