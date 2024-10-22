'use client'

import { Form } from '@/components/form'
import { TextareaWithCounter } from '@/components/textarea-with-counter'
import { Input } from '@/components/ui/input'
import { BIO_MAX_LENGTH, TITLE_MAX_LENGTH } from '@/helpers/register/profile'
import { useAboutForm } from '@/hooks/register/profile'
import { REGISTER_PROFILE_TEXTS } from '@/locales'

import { FormFooter } from './form-footer'

export function AboutForm() {
  const aboutFormTexts = REGISTER_PROFILE_TEXTS.About.AboutForm

  const {
    form,
    titleError,
    bioError,
    isFormValid,
    handleSubmit,
    saveAbout,
    clearAbout,
  } = useAboutForm()

  return (
    <Form.Root {...form}>
      <Form.Wrapper
        className='flex h-full w-full max-w-lg flex-col items-center gap-8'
        onSubmit={handleSubmit(saveAbout)}
      >
        <Form.Field
          name='title'
          control={form.control}
          render={({ field }) => (
            <Form.Item>
              <Form.Label>{aboutFormTexts.title.label}</Form.Label>
              <Form.Control>
                <Input
                  statusIcon
                  variant={titleError && 'error'}
                  placeholder={aboutFormTexts.title.placeholder}
                  maxLength={TITLE_MAX_LENGTH}
                  {...field}
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />

        <Form.Field
          name='bio'
          control={form.control}
          render={({ field }) => (
            <Form.Item>
              <Form.Label>{aboutFormTexts.bio.label}</Form.Label>
              <Form.Control>
                <TextareaWithCounter
                  variant={bioError && 'error'}
                  placeholder={aboutFormTexts.bio.placeholder}
                  maxLength={BIO_MAX_LENGTH}
                  className='min-h-60'
                  {...field}
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />

        <FormFooter.Root>
          {isFormValid && <FormFooter.ClearButton onClick={clearAbout} />}
          <FormFooter.SubmitButton disabled={!isFormValid} />
        </FormFooter.Root>
      </Form.Wrapper>
    </Form.Root>
  )
}
