'use client'

import Image from 'next/image'

import { Form } from '@/components/form'
import { Input } from '@/components/ui/input'
import { useSocialForm } from '@/hooks/register/profile'
import { REGISTER_PROFILE_TEXTS } from '@/locales'
import { socialMediaOptions } from '@/utils/register/profile'

import { FormFooter } from './form-footer'

export function SocialForm() {
  const socialFormTexts = REGISTER_PROFILE_TEXTS.Social.SocialForm

  const {
    form,
    fieldErrors,
    isFormValid,
    handleSubmit,
    saveSocialLinks,
    clearSocialLinks,
  } = useSocialForm()

  return (
    <Form.Root {...form}>
      <Form.Wrapper
        className='flex w-96 flex-1 flex-col items-center gap-8'
        onSubmit={handleSubmit(saveSocialLinks)}
      >
        {socialMediaOptions.map(social => {
          return (
            <Form.Field
              key={social.name}
              name={social.name}
              control={form.control}
              render={({ field }) => (
                <Form.Item className='group flex flex-row items-start gap-2'>
                  <div className='flex size-10 items-center justify-center rounded-lg bg-foreground group-focus-within:bg-primary'>
                    <Image
                      src={social.icon}
                      alt={social.name}
                      className='size-6 dark:opacity-90 dark:invert'
                    />
                  </div>
                  <div className='flex flex-1 flex-col gap-1.5'>
                    <Form.Label className='sr-only'>
                      {socialFormTexts.url.label}
                    </Form.Label>
                    <Form.Control>
                      <Input
                        variant={fieldErrors[social.name] && 'error'}
                        placeholder={`${social.baseUrl}/${socialFormTexts.url.placeholder}`}
                        {...field}
                      />
                    </Form.Control>
                    <Form.Message />
                  </div>
                </Form.Item>
              )}
            />
          )
        })}

        <FormFooter.Root>
          {isFormValid && <FormFooter.ClearButton onClick={clearSocialLinks} />}
          <FormFooter.SubmitButton disabled={!isFormValid} />
        </FormFooter.Root>
      </Form.Wrapper>
    </Form.Root>
  )
}
