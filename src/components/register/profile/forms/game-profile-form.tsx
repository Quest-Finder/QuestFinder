'use client'

import Image from 'next/image'

import { Form } from '@/components/form'
import { CheckboxWrapper } from '@/components/ui/checkbox-wrapper'
import { getGameProfileOptionColor } from '@/helpers/register/profile'
import { useGameProfileForm } from '@/hooks/register/profile'
import { cn } from '@/lib/utils'
import { gameProfileOptions } from '@/utils/register/profile'

import { FormFooter } from './form-footer'

export function GameProfileForm() {
  const {
    form,
    selectedGameProfile,
    isFormValid,
    handleSubmit,
    saveGameProfile,
  } = useGameProfileForm()

  return (
    <Form.Root {...form}>
      <Form.Wrapper
        className='flex w-full max-w-5xl flex-1 flex-col items-center gap-8'
        onSubmit={handleSubmit(saveGameProfile)}
      >
        <Form.Field
          name='gameProfile'
          control={form.control}
          render={({ field }) => (
            <div className='flex w-full max-w-6xl flex-wrap justify-center gap-8'>
              {gameProfileOptions.map(option => {
                return (
                  <Form.Item
                    key={option.id}
                    asChild
                  >
                    <CheckboxWrapper.Label
                      selected={option.id === selectedGameProfile}
                      className={cn(
                        'max-w-80 rounded-lg border-2 p-6 transition-all hover:shadow-lg data-[selected=true]:shadow-lg',
                        getGameProfileOptionColor(option.id),
                      )}
                    >
                      <CheckboxWrapper.Input
                        title={option.title}
                        checked={option.id === selectedGameProfile}
                        onCheckedChange={() => {
                          field.onChange(option.id)
                        }}
                      />
                      <Image
                        alt={option.title}
                        src={option.image}
                        className='mb-4 size-24'
                      />
                      <h3 className='font-bold'>{option.title}</h3>
                      <p className='text-sm'>{option.description}</p>
                    </CheckboxWrapper.Label>
                  </Form.Item>
                )
              })}
            </div>
          )}
        />

        <FormFooter.Root>
          <FormFooter.SubmitButton disabled={!isFormValid} />
        </FormFooter.Root>
      </Form.Wrapper>
    </Form.Root>
  )
}
