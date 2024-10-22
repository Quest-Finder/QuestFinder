'use client'

import { Form } from '@/components/form'
import { useGameStylesForm } from '@/hooks/register/profile'

import { FormFooter } from './form-footer'
import { GameStylesOptions } from './game-style-options'

export function GameStylesForm() {
  const { form, isFormValid, handleSubmit, saveGameStyles, clearGameStyles } =
    useGameStylesForm()

  return (
    <Form.Root {...form}>
      <Form.Wrapper
        className='flex w-full max-w-5xl flex-1 flex-col items-center gap-8'
        onSubmit={handleSubmit(saveGameStyles)}
      >
        <Form.Field
          name='gameStyles'
          control={form.control}
          render={({ field }) => <GameStylesOptions field={field} />}
        />

        <FormFooter.Root>
          {isFormValid && <FormFooter.ClearButton onClick={clearGameStyles} />}
          <FormFooter.SubmitButton disabled={!isFormValid} />
        </FormFooter.Root>
      </Form.Wrapper>
    </Form.Root>
  )
}
