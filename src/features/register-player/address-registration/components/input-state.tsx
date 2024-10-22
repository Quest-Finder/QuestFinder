import { useFormContext } from 'react-hook-form'

import { FormField, FormLabel } from '@/components/ui/form'
import { Select } from '@/components/ui/select'

import { addressRegistrationValidationT } from '../types/address-registration'
import { states } from '../utils/estates'

export default function InputState() {
  const form = useFormContext<addressRegistrationValidationT>()

  return (
    <FormField
      name='state'
      control={form.control}
      render={({ field }) => (
        <Select.Root
          onValueChange={field.onChange}
          defaultValue={field.value}
        >
          <FormLabel
            className={` ${form.formState.errors.state && 'text-red-500'} `}
          >
            Em qual estado você mora?
          </FormLabel>

          <Select.Trigger className='mt-2 focus-visible:ring-transparent'>
            <Select.Value placeholder='Selecione seu estado' />
          </Select.Trigger>
          <Select.Content className='bg-neutral-50'>
            <Select.Group>
              {states.map(option => (
                <Select.Item
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Content>
        </Select.Root>
      )}
    />
  )
}
