import React from 'react'

import { cn } from '@/lib/utils'
import { COMPONENT_TEXTS } from '@/locales'

import { Textarea, type TextareaProps } from './ui/textarea'

export interface TextareaWithCounterProps extends TextareaProps {
  maxLength?: number
}

const TextareaWithCounter = React.forwardRef<
  HTMLTextAreaElement,
  TextareaWithCounterProps
>(({ maxLength, value, className, ...props }, ref) => {
  const textareaTexts = COMPONENT_TEXTS.TextareaWithCounter
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
          ? `${currentLength}/${maxLength} ${textareaTexts.characters}`
          : `${currentLength} ${textareaTexts.characters}`}
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
