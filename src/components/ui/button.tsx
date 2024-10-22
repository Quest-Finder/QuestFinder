import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex w-fit shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-primary-foreground shadow-md hover:bg-primary-hard',
        'primary-outline':
          'border border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground',
        secondary:
          'bg-secondary text-secondary-foreground shadow-md hover:bg-secondary-hard',
        'secondary-outline':
          'border border-secondary bg-background text-secondary hover:bg-secondary hover:text-secondary-foreground',
        outline:
          'border border-border bg-background text-foreground hover:bg-background-soft',
        ghost: 'bg-transparent text-foreground hover:bg-foreground/10',
        destructive: 'bg-error text-white hover:bg-error-hard',
        'destructive-outline':
          'border border-error bg-background text-error hover:bg-error hover:text-white',
        input:
          'border border-border-hard bg-background text-sm text-foreground hover:bg-background-soft',
      },
      size: {
        default: 'h-10 px-4',
        sm: 'h-7 rounded-md px-2 text-sm',
        lg: 'h-16 gap-3 px-6 text-xl',
        icon: 'size-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
