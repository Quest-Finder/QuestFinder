import { cva, type VariantProps } from 'class-variance-authority'
import { CircleAlert, type LucideIcon } from 'lucide-react'
import React from 'react'

import { cn } from '@/lib/utils'

const inputClasses = {
  base: 'flex h-10 w-full items-center bg-background px-3 py-2 ring-offset-background disabled:cursor-not-allowed disabled:opacity-50',
  border: 'rounded-lg border border-border-hard',
  focus:
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
}

const inputVariants = cva(
  `${inputClasses.base} ${inputClasses.border} ${inputClasses.focus}`,
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

const statusIconColor = {
  default: 'text-foreground',
  info: 'text-info dark:text-info-hard',
  warning: 'text-warning-hard',
  error: 'text-error dark:text-error-hard',
  success: 'text-success dark:text-sucess-hard',
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  statusIcon?: boolean | LucideIcon
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ statusIcon, variant, className, ...props }, ref) => {
    const showStatusIcon = statusIcon && variant && variant !== 'default'

    if (statusIcon) {
      // Get the icon passed as a prop or render <CircleAlert /> as default
      const Icon = statusIcon !== true ? statusIcon : CircleAlert

      return (
        <div className='relative w-full'>
          <input
            ref={ref}
            className={cn(
              inputVariants({ variant, className }),
              showStatusIcon && 'pr-10',
            )}
            {...props}
          />
          {showStatusIcon && (
            <div
              className={cn(
                'absolute right-0 top-0 flex size-10 items-center justify-center [&>svg]:size-5',
                statusIconColor[variant],
              )}
            >
              <Icon />
            </div>
          )}
        </div>
      )
    }

    return (
      <input
        ref={ref}
        className={cn(inputVariants({ variant, className }))}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

export { Input }

/* USAGE

  <Input
    statusIcon? or statusIcon?={Icon}
    variant?="default | info | warning | error | success"
    {...props}
  />

*/
