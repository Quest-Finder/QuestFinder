'use client'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import * as LabelPrimitive from '@radix-ui/react-label'
import { Check } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/utils'

interface CheckboxWrapperProps extends React.ComponentPropsWithoutRef<'div'> {}

const CheckboxWrapper = React.forwardRef<HTMLDivElement, CheckboxWrapperProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center gap-2', className)}
      {...props}
    />
  ),
)
CheckboxWrapper.displayName = 'CheckboxWrapper'

export interface CheckboxCheckProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  title: string
}

const CheckboxCheck = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxCheckProps
>(({ title, className, ...props }, ref) => {
  const baseClasses =
    'peer size-5 shrink-0 ring-offset-background disabled:cursor-not-allowed disabled:opacity-50'
  const borderClasses = 'rounded border-2 border-foreground/50'
  const focusClasses =
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
  const stateClasses =
    'data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground'

  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        baseClasses,
        borderClasses,
        focusClasses,
        stateClasses,
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn('flex items-center justify-center text-current')}
      >
        <Check
          className='size-4'
          strokeWidth={3}
        />
      </CheckboxPrimitive.Indicator>
      <span className='sr-only'>{title}</span>
    </CheckboxPrimitive.Root>
  )
})
CheckboxCheck.displayName = CheckboxPrimitive.Root.displayName

interface CheckboxLabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {}

const CheckboxLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  CheckboxLabelProps
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      'peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
      className,
    )}
    {...props}
  />
))
CheckboxLabel.displayName = LabelPrimitive.Root.displayName

export const Checkbox = {
  Wrapper: CheckboxWrapper,
  Check: CheckboxCheck,
  Label: CheckboxLabel,
}

/* USAGE

  <Checkbox.Wrapper>
    <Checkbox.Check/>
    <Checkbox.Label/>
  </Checkbox.Wrapper>

*/
