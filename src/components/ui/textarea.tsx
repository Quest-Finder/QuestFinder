import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'

import { cn } from '@/lib/utils'

const textareaClasses = {
  base: 'min-h-32 w-full bg-background px-3 py-2 ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 resize-y',
  border: 'rounded-lg border border-border-hard',
  focus:
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
}

const textareaVariants = cva(
  `${textareaClasses.base} ${textareaClasses.border} ${textareaClasses.focus}`,
  {
    variants: {
      variant: {
        default: 'text-foreground placeholder:text-foreground-support',
        info: 'border-info bg-info-soft/20 text-info placeholder:text-info-soft dark:text-info-hard dark:placeholder:text-info',
        warning:
          'border-warning bg-warning-soft/20 text-warning-hard placeholder:text-warning',
        error:
          'border-error bg-error-soft/20 text-error placeholder:text-error-soft dark:text-error-hard dark:placeholder:text-error',
        success:
          'border-success bg-success-soft/20 text-success placeholder:text-success-soft dark:text-success-hard dark:placeholder:text-success',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ variant, className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(textareaVariants({ variant, className }))}
        {...props}
      />
    )
  },
)
Textarea.displayName = 'Textarea'

export { Textarea }

/* USAGE

  <Textarea
    variant?="default | info | warning | error | success"
    {...props}
  />

*/
