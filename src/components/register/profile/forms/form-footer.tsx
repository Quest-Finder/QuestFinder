import { ChevronRight, Eraser } from 'lucide-react'
import React from 'react'

import { Button, type ButtonProps } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { REGISTER_PROFILE_TEXTS } from '@/locales'

interface RootProps extends React.HTMLAttributes<HTMLDivElement> {}

const buttonTexts = REGISTER_PROFILE_TEXTS.Profile.Form.buttons

function Root({ className, ...props }: RootProps) {
  return (
    <footer
      className={cn('mt-auto flex gap-4', className)}
      {...props}
    />
  )
}

export function ClearButton({
  size,
  variant,
  ...props
}: Readonly<ButtonProps>) {
  return (
    <Button
      type='button'
      size={size ?? 'lg'}
      variant={variant ?? 'outline'}
      {...props}
    >
      {buttonTexts.clear}
      <Eraser className='size-5' />
    </Button>
  )
}

export function SubmitButton({ type, size, ...props }: Readonly<ButtonProps>) {
  return (
    <Button
      type={type ?? 'submit'}
      size={size ?? 'lg'}
      {...props}
    >
      {buttonTexts.submit}
      <ChevronRight className='size-6' />
    </Button>
  )
}

export const FormFooter = {
  Root,
  ClearButton,
  SubmitButton,
}
