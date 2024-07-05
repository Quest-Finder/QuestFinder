'use client'

import { Arrow } from '@/components/icons/Arrow'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import { cn } from '@/lib/utils'
import { Skeleton } from '../utils/Skeleton'
import { FormTitle } from '../utils/title-form'
import { FormAditionalText } from './components/FormAditionalText'
import { validationCheckBoxLimitation } from './helpers/validationCheckBoxLimitation'
import { useFormGameStyles } from './hooks/useFormGameStyles'
import useSubmitGameStyles from './hooks/useSubmitGameStyles'

export function FormGameStyles() {
  const { gameStyles, isLoading, form } = useFormGameStyles()

  return (
    <Form {...form}>
      <div>
        <FormAditionalText className='text-center'>
          Olá! Para aprimorarmos sua experiência no TVM, por favor, responda
          algumas perguntas.
        </FormAditionalText>
        <FormTitle className='mb-0'>
          Escolha o estilo de jogo que mais se alinha com seus interesses.
        </FormTitle>
      </div>
      <form
        onSubmit={form.handleSubmit(useSubmitGameStyles())}
        className='flex flex-col items-center space-y-8'
      >
        <FormField
          control={form.control}
          name='rpgStyles'
          render={() => (
            <FormItem>
              <FormItem className='flex max-w-[44.063rem] flex-wrap justify-center gap-2 space-y-0'>
                {isLoading && (
                  <Skeleton
                    height='[2.875rem]'
                    width={40}
                    quantity={10}
                    className='rounded-full'
                  />
                )}
                {!isLoading &&
                  gameStyles &&
                  gameStyles.map(item => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name='rpgStyles'
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            aria-disabled={validationCheckBoxLimitation(
                              form.getValues('rpgStyles'),
                              item.id,
                              3,
                            )}
                            className='group/checkbox aria-disabled:cursor-not-allowed'
                          >
                            <FormLabel
                              className={cn(
                                'flex w-fit cursor-pointer items-center gap-2.5 space-y-0 rounded-full border-[1px] bg-primary-50 px-4 py-3 font-mono text-sm font-medium text-primary-900 group-aria-disabled/checkbox:pointer-events-none group-aria-disabled/checkbox:opacity-50',
                                field.value?.includes(item.id)
                                  ? 'border-primary-900'
                                  : 'border-transparent',
                              )}
                            >
                              {item.name}
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item.id)}
                                  className='border-primary-900 data-[state=checked]:rounded-full data-[state=checked]:bg-primary-900'
                                  onCheckedChange={(checked: boolean) => {
                                    return checked
                                      ? field.onChange([
                                          ...field.value,
                                          item.id,
                                        ])
                                      : field.onChange(
                                          field.value?.filter(
                                            value => value !== item.id,
                                          ),
                                        )
                                  }}
                                />
                              </FormControl>
                            </FormLabel>
                          </FormItem>
                        )
                      }}
                    />
                  ))}
              </FormItem>
              {form.formState.errors.rpgStyles?.message && (
                <div className='mx-auto w-fit [&>ul]:mt-5'>
                  <FormMessage />
                </div>
              )}
            </FormItem>
          )}
        />
        <div className='text-center'>
          <Button
            disabled={!form.formState.isValid}
            className='h-full max-h-14 w-full max-w-[214px] text-base disabled:opacity-50'
            variant='default'
            type='submit'
          >
            Salvar e Continuar
            <Arrow />
          </Button>
        </div>
      </form>
    </Form>
  )
}