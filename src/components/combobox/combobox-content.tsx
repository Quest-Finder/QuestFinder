'use client'

import { Check } from 'lucide-react'
import React from 'react'

import { cn } from '@/lib/utils'

import { Command } from '../ui/command'
import { Popover, type PopoverContentProps } from '../ui/popover'
import { ComboboxContext } from './combobox-context'

interface ComboboxContentProps extends PopoverContentProps {
  searchPlaceholder: string
  emptyPlaceholder: string
}

export function ComboboxContent({
  searchPlaceholder,
  emptyPlaceholder,
  align = 'start',
  className,
  ...props
}: Readonly<ComboboxContentProps>) {
  const { options, value, onSelectValue } = React.useContext(ComboboxContext)

  return (
    <Popover.Content
      align={align}
      data-side='bottom'
      className={cn('w-full p-0', className)}
      {...props}
    >
      <Command.Root>
        <Command.Input placeholder={searchPlaceholder} />
        <Command.List>
          <Command.Empty>{emptyPlaceholder}</Command.Empty>
          <Command.Group>
            {options.map(item => (
              <Command.Item
                key={item.value}
                value={item.value}
                keywords={[item.label, item.keyword ?? '']}
                onSelect={onSelectValue}
                className='justify-between'
              >
                {item.label}
                {value === item.value && <Check />}
              </Command.Item>
            ))}
          </Command.Group>
        </Command.List>
      </Command.Root>
    </Popover.Content>
  )
}
