import { cn } from '@/lib/utils'
import React, { ElementType } from 'react'

interface TypographyH2Pros {
  content: string
  as?: ElementType
  className?: string
}
export function Typography({
  content,
  as: Component = 'p',
  className,
}: TypographyH2Pros) {
  return (
    <Component
      className={cn(
        'bg-card  text-card-foreground rounded-lg border border-none text-center font-notoSans text-xl font-semibold leading-normal',
        className,
      )}
    >
      {content}
    </Component>
  )
}
