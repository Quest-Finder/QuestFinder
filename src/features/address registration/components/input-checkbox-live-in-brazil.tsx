import React from 'react'
import {
  FormField,
  FormLabel,
  FormControl,
  FormItem,
} from '@/components/ui/form'
import { useFormContext } from 'react-hook-form'
import { addressRegistrationValidationT } from '../types/address-registration'

export default function InputLiveInBrazil() {
  const form = useFormContext<addressRegistrationValidationT>()

  return (
    <div className=''>
      <FormField
        control={form.control}
        name='liveInBrazil'
        render={({ field }) => (
          <FormItem className='mr-auto flex flex-row items-start space-x-3  space-y-0 p-4'>
            <FormControl>
              <FormLabel
                className='flex cursor-pointer items-center gap-2'
                htmlFor='liveInBrazil'
              >
                <input
                  id='liveInBrazil'
                  type='checkbox'
                  checked={field.value}
                  onChange={field.onChange}
                  className='h-4 w-4 p-1 accent-primary-900 transition-colors'
                />
                Não moro no Brasil
              </FormLabel>
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  )
}
