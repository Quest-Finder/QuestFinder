'use client'

import { Toast } from './toast'
import { useToast } from './use-toast'

export function Toaster() {
  const { toasts } = useToast()

  return (
    <Toast.Provider>
      {toasts.map(({ id, title, description, action, ...props }) => {
        return (
          <Toast.Wrapper
            key={id}
            {...props}
          >
            <div className='grid gap-1'>
              {title && <Toast.Title>{title}</Toast.Title>}
              {description && (
                <Toast.Description>{description}</Toast.Description>
              )}
            </div>
            {action}
            <Toast.Close />
          </Toast.Wrapper>
        )
      })}
      <Toast.Viewport />
    </Toast.Provider>
  )
}
