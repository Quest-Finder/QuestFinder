import { FormField, FormLabel } from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useFormContext } from 'react-hook-form'
import { addressRegistrationValidationT } from '../types/address-registration'
import { states } from '../utils/estates'

export default function InputState() {
  const form = useFormContext<addressRegistrationValidationT>()
  const liveAbroad = form.watch('liveAbroad')

  return (
    <FormField
      name='state'
      control={form.control}
      render={({ field }) => (
        <Select
          onValueChange={field.onChange}
          value={field.value}
          disabled={liveAbroad}
        >
          <FormLabel className='w-full font-raleway text-base	 font-bold text-[#000000]'>
            Em qual estado você mora?
          </FormLabel>

          <SelectTrigger className='font-feature-settings min-h-[40px] max-w-[371px] rounded-md border border-[#D4D4D4] bg-[#FFFFFF] font-raleway text-base font-normal leading-6 text-[#262626]'>
            <SelectValue placeholder='Selecione seu estado' />
          </SelectTrigger>
          <SelectContent className=' bg-neutral-50'>
            <SelectGroup>
              {states.map(option => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      )}
    />
  )
}
