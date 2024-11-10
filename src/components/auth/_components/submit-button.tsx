import { Loader2 } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface SubmitButtonProps {
  isFormValid: boolean
  isPending: boolean
  defaultText: string
  pendingText: string
}

export function SubmitButton({
  isFormValid,
  isPending,
  defaultText,
  pendingText,
}: Readonly<SubmitButtonProps>) {
  return (
    <Button
      type='submit'
      className='mt-4 w-full md:mt-auto'
      disabled={!isFormValid || isPending}
    >
      {isPending ? (
        <>
          <Loader2 className='size-5 animate-spin' />
          {pendingText}
        </>
      ) : (
        defaultText
      )}
    </Button>
  )
}
