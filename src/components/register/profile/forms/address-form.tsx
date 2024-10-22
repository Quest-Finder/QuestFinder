'use client'

import { Combobox } from '@/components/combobox'
import type { ComboboxOptions } from '@/components/combobox/combobox-context'
import { Form } from '@/components/form'
import { Checkbox } from '@/components/ui/checkbox'
import { STATES, type States } from '@/constants'
import cities from '@/constants/ibge/cities.json'
import { useAddressForm } from '@/hooks/register/profile'
import { REGISTER_PROFILE_TEXTS } from '@/locales'

import { FormFooter } from './form-footer'

export function AddressForm() {
  const addressFormTexts = REGISTER_PROFILE_TEXTS.Address.AddressForm

  const {
    form,
    selectedState,
    liveAbroad,
    isFormValid,
    reset,
    setValue,
    handleSubmit,
    saveAddress,
    clearAddress,
  } = useAddressForm()

  const stateOptions: ComboboxOptions[] = STATES.map(state => {
    return { value: state.name, label: state.name, keyword: state.uf }
  })

  const citiesByState: States = cities
  const cityOptions: ComboboxOptions[] = selectedState
    ? citiesByState[selectedState].map(city => {
        return { value: city.name, label: city.name }
      })
    : []

  return (
    <Form.Root {...form}>
      <Form.Wrapper
        className='flex h-full w-80 flex-col items-center gap-8'
        onSubmit={handleSubmit(saveAddress)}
      >
        <Form.Field
          name='state'
          control={form.control}
          render={({ field }) => (
            <Form.Item>
              <Form.Label
                aria-disabled={liveAbroad}
                className='aria-disabled:opacity-25'
              >
                {addressFormTexts.state.label}
              </Form.Label>
              <Form.Control>
                <Combobox.Root
                  options={stateOptions}
                  setValue={e => {
                    field.onChange(e)
                    setValue('city', '')
                  }}
                  placeholder={addressFormTexts.state.placeholder}
                  className='disabled:opacity-25'
                  disabled={liveAbroad}
                  {...field}
                >
                  <Combobox.Content
                    searchPlaceholder={addressFormTexts.state.searchPlaceholder}
                    emptyPlaceholder={addressFormTexts.state.emptyPlaceholder}
                    className='w-80'
                  />
                </Combobox.Root>
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />

        <Form.Field
          name='city'
          control={form.control}
          render={({ field }) => (
            <Form.Item>
              <Form.Label
                aria-disabled={!form.watch('state')}
                className='aria-disabled:opacity-25'
              >
                {addressFormTexts.city.label}
              </Form.Label>
              <Form.Control>
                <Combobox.Root
                  options={cityOptions}
                  setValue={field.onChange}
                  placeholder={addressFormTexts.city.placeholder}
                  className='disabled:opacity-25'
                  disabled={!form.watch('state')}
                  {...field}
                >
                  <Combobox.Content
                    searchPlaceholder={addressFormTexts.city.searchPlaceholder}
                    emptyPlaceholder={addressFormTexts.city.emptyPlaceholder}
                    className='w-80'
                  />
                </Combobox.Root>
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />

        <Form.Field
          name='liveAbroad'
          control={form.control}
          render={({ field }) => (
            <Form.Item>
              <Checkbox.Wrapper>
                <Form.Control>
                  <Checkbox.Check
                    title={addressFormTexts.liveAbroad.label}
                    checked={field.value}
                    onCheckedChange={() => {
                      reset({ state: '', city: '', liveAbroad: !liveAbroad })
                    }}
                  />
                </Form.Control>
                <Form.Label type='checkbox'>
                  {addressFormTexts.liveAbroad.label}
                </Form.Label>
              </Checkbox.Wrapper>
              <Form.Message />
            </Form.Item>
          )}
        />

        <FormFooter.Root>
          {isFormValid && <FormFooter.ClearButton onClick={clearAddress} />}
          <FormFooter.SubmitButton disabled={!isFormValid} />
        </FormFooter.Root>
      </Form.Wrapper>
    </Form.Root>
  )
}
