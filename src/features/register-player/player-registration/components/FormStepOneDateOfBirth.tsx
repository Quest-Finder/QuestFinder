import { useEffect } from 'react'

import { Select } from '@/components/ui/select'

import {
  generateDaysOfAMonth,
  generateXYearsUntillToday,
  monthsArray,
} from '../helper'
import { useStateDateOfBirth } from '../hooks/useStateDateOfBirth'

interface DateOfBirthProps {
  onSelectedDate: (date: string) => void
}

export function DateOfBirth({ onSelectedDate }: DateOfBirthProps) {
  const { handleDay, handleMonth, handleYear, dateForm } = useStateDateOfBirth()

  useEffect(() => {
    if (dateForm.day !== '' && dateForm.month !== '' && dateForm.yaer !== '') {
      onSelectedDate(`${dateForm.month}-${dateForm.day}-${dateForm.yaer}`)
    }
  }, [dateForm, onSelectedDate])

  return (
    <div className='flex justify-between gap-2'>
      <Select.Root
        onValueChange={e => handleDay(e)}
        value={dateForm.day}
      >
        <Select.Trigger className='w-16'>
          <Select.Value placeholder='Dia' />
        </Select.Trigger>
        <Select.Content>
          {generateDaysOfAMonth().map(day => {
            return (
              <Select.Item
                key={day}
                value={day.toString()}
              >
                {day}
              </Select.Item>
            )
          })}
        </Select.Content>
      </Select.Root>

      <Select.Root
        onValueChange={e => handleMonth(e)}
        value={dateForm.month}
      >
        <Select.Trigger className='w-40'>
          <Select.Value placeholder='Selecionar mes' />
        </Select.Trigger>
        <Select.Content>
          {monthsArray.map(mes => {
            return (
              <Select.Item
                key={mes.value}
                value={mes.value.toString()}
              >
                {mes.name}
              </Select.Item>
            )
          })}
        </Select.Content>
      </Select.Root>

      <Select.Root
        onValueChange={e => handleYear(e)}
        value={dateForm.yaer}
      >
        <Select.Trigger className='w-20'>
          <Select.Value placeholder='Ano' />
        </Select.Trigger>
        <Select.Content>
          {generateXYearsUntillToday(100).map(ano => {
            return (
              <Select.Item
                key={ano}
                value={ano.toString()}
              >
                {ano}
              </Select.Item>
            )
          })}
        </Select.Content>
      </Select.Root>
    </div>
  )
}
