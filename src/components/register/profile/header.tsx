import React from 'react'

import { cn } from '@/lib/utils'

interface RootProps extends React.HTMLAttributes<HTMLDivElement> {}

function Root({ className, ...props }: RootProps) {
  return (
    <header
      className={cn(className)}
      {...props}
    />
  )
}

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

function Title({ className, children, ...props }: TitleProps) {
  return (
    <h2
      className={cn(
        'text-center text-3xl font-bold text-foreground-hard',
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  )
}

interface DescriptionProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType
}

function Description({
  as: Component = 'p',
  className,
  children,
  ...props
}: Readonly<DescriptionProps>) {
  return (
    <Component
      className={cn('text-center text-foreground-soft', className)}
      {...props}
    >
      {children}
    </Component>
  )
}

export const Header = {
  Root,
  Title,
  Description,
}
