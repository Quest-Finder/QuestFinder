import { Slot } from '@radix-ui/react-slot'
import React from 'react'

import { cn } from '@/lib/utils'

import { FormItemContext } from './form-context'

interface FormItemProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
}

export const FormItem = React.forwardRef<HTMLDivElement, FormItemProps>(
  ({ asChild, className, ...props }, ref) => {
    const id = React.useId()
    const currentId = React.useMemo(() => ({ id }), [id])

    const Comp = asChild ? Slot : 'div'

    return (
      <FormItemContext.Provider value={currentId}>
        <Comp
          ref={ref}
          className={cn('flex w-full flex-col gap-1.5', className)}
          {...props}
        />
      </FormItemContext.Provider>
    )
  },
)
FormItem.displayName = 'FormItem'
