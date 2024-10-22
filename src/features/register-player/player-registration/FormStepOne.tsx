'use client'

import { Update } from '@/components/icons/Update'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'

import FormText from '../FormText.json'
import { FormFirstStep } from '.'
import { useFormStepOne, useSubmitStepOne } from './hooks'

export function FormStepOne() {
  const { nameLoading, form, handleSelectDate } = useFormStepOne()

  return (
    <FormFirstStep.Root>
      <Form {...form}>
        <FormFirstStep.Title>{FormText.formStepOne.title}</FormFirstStep.Title>
        <form
          onSubmit={form.handleSubmit(useSubmitStepOne())}
          className='w-full max-w-[340px] space-y-4'
        >
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome*</FormLabel>
                <FormControl>
                  <FormFirstStep.InputField>
                    <Input
                      statusIcon
                      disabled={nameLoading}
                      variant={form.formState.errors.name && 'error'}
                      placeholder='Exemplo: Pedro da Silva Sauro'
                      {...field}
                    />
                    {nameLoading && (
                      <FormFirstStep.InputIcon
                        icon={Update}
                        className='motion-safe:animate-pulse'
                      />
                    )}
                  </FormFirstStep.InputField>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username*</FormLabel>
                <FormControl>
                  <FormFirstStep.InputField>
                    <Input
                      statusIcon
                      variant={form.formState.errors.username && 'error'}
                      placeholder='Exemplo: Pedrosauro'
                      {...field}
                    />
                  </FormFirstStep.InputField>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='pronoun'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pronome</FormLabel>
                <Select.Root
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <Select.Trigger>
                      <Select.Value placeholder='Selecione uma opção' />
                    </Select.Trigger>
                  </FormControl>
                  <Select.Content>
                    <Select.Item value='he/his'>Ele / Dele</Select.Item>
                    <Select.Item value='she/her'>Ela / Dela</Select.Item>
                    <Select.Item value='they/theirs'>Elu / Delu</Select.Item>
                    <Select.Item value="I don't want to share any pronouns">
                      Não me sinto confortável em responder
                    </Select.Item>
                  </Select.Content>
                </Select.Root>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='dateOfBirth'
            render={() => (
              <FormItem>
                <FormLabel>Data de nascimento*</FormLabel>
                <FormFirstStep.DateOfBirth onSelectedDate={handleSelectDate} />
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='text-center'>
            <Button
              disabled={!form.formState.isValid}
              aria-disabled={form.formState.isValidating}
              size='lg'
              className='mt-4'
              type='submit'
            >
              Próximo
            </Button>
          </div>
        </form>
      </Form>
    </FormFirstStep.Root>
  )
}
