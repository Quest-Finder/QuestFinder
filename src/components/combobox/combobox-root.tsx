'use client'

import { ChevronDown } from 'lucide-react'
import React from 'react'

import { cn } from '@/lib/utils'

import { Button, type ButtonProps } from '../ui/button'
import { Popover } from '../ui/popover'
import {
  ComboboxContext,
  type ComboboxContextValue,
  type ComboboxOptions,
} from './combobox-context'

interface ComboboxRootProps extends ButtonProps {
  options: ComboboxOptions[]
  placeholder: string
  value: string
  setValue: (value: string) => void
}

export const ComboboxRoot = React.forwardRef<
  HTMLButtonElement,
  ComboboxRootProps
>(
  (
    { options, placeholder, value, setValue, className, children, ...props },
    ref,
  ) => {
    const [open, setOpen] = React.useState(false)

    const onSelectValue = React.useCallback(
      (selectedValue: string) => {
        setValue(selectedValue === value ? '' : selectedValue)
        setOpen(false)
      },
      [setValue, value],
    )

    const contextValue: ComboboxContextValue = React.useMemo(
      () => ({ options, value, onSelectValue }),
      [options, value, onSelectValue],
    )

    return (
      <ComboboxContext.Provider value={contextValue}>
        <Popover.Root
          open={open}
          onOpenChange={setOpen}
        >
          <Popover.Trigger asChild>
            <Button
              ref={ref}
              variant='input'
              className={cn(
                'group w-full justify-between gap-3 px-3',
                className,
              )}
              {...props}
            >
              {value ? (
                options.find(item => item.value === value)?.label
              ) : (
                <span className='text-foreground-support'>{placeholder}</span>
              )}
              <ChevronDown className='size-5 shrink-0 text-foreground opacity-50 transition-all duration-200 group-data-[state=open]:rotate-180' />
            </Button>
          </Popover.Trigger>
          {children}
        </Popover.Root>
      </ComboboxContext.Provider>
    )
  },
)
