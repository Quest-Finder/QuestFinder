import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import * as LabelPrimitive from '@radix-ui/react-label'
import React from 'react'

import { cn } from '@/lib/utils'

interface CheckboxWrapperLabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
  selected?: boolean
}

const CheckboxWrapperLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  CheckboxWrapperLabelProps
>(({ htmlFor, selected, className, ...props }, ref) => {
  const labelClasses = {
    base: 'relative outline-none ring-offset-background transition-all hover:cursor-pointer',
    focus:
      'focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2',
    disable: 'aria-disabled:opacity-50 aria-disabled:pointer-events-none',
  }

  const { 'aria-disabled': disabled } = props

  return (
    <LabelPrimitive.Root
      ref={ref}
      htmlFor={htmlFor}
      data-selected={selected}
      className={cn(
        labelClasses.base,
        labelClasses.focus,
        disabled && labelClasses.disable,
        className,
      )}
      {...props}
    />
  )
})

interface CheckboxWrapperInputProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  title: string
}

const CheckboxWrapperInput = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxWrapperInputProps
>(({ title, className, ...props }, ref) => {
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      title={title}
      className={cn(
        'absolute size-full opacity-0 disabled:cursor-not-allowed',
        className,
      )}
      {...props}
    />
  )
})

export const CheckboxWrapper = {
  Label: CheckboxWrapperLabel,
  Input: CheckboxWrapperInput,
}
