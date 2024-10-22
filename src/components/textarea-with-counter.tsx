import React from 'react'

import { cn } from '@/lib/utils'

import texts from './locales/pt-BR.json'
import { Textarea, type TextareaProps } from './ui/textarea'

export interface TextareaWithCounterProps extends TextareaProps {
  maxLength?: number
}

const TextareaWithCounter = React.forwardRef<
  HTMLTextAreaElement,
  TextareaWithCounterProps
>(({ maxLength, value, className, ...props }, ref) => {
  const TEXTAREA_TEXTS = texts.Components.TextareaWithCounter
  const currentLength = value?.toLocaleString().length ?? 0

  return (
    <div className='relative flex flex-col items-end gap-1'>
      <Textarea
        ref={ref}
        maxLength={maxLength}
        value={value}
        className={cn('peer pb-8', className)}
        {...props}
      />
      <span className='absolute bottom-2 right-3 text-sm text-foreground-soft peer-disabled:opacity-50'>
        {maxLength
          ? `${currentLength}/${maxLength} ${TEXTAREA_TEXTS.characters}`
          : `${currentLength} ${TEXTAREA_TEXTS.characters}`}
      </span>
    </div>
  )
})
TextareaWithCounter.displayName = 'TextareaWithCounter'

export { TextareaWithCounter }

/* USAGE

  <TextareaWithCounter
    currentLength?={}
    maxLength?={}
    {...props}
  />

*/
