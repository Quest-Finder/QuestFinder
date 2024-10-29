'use client'

import * as ToastPrimitives from '@radix-ui/react-toast'
import { cva, type VariantProps } from 'class-variance-authority'
import { X } from 'lucide-react'
import React from 'react'

import { cn } from '@/lib/utils'

const ToastProvider = ToastPrimitives.Provider

interface ToastViewportProps
  extends React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport> {}

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  ToastViewportProps
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      'fixed right-0 top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:flex-col md:max-w-[28rem]',
      className,
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const wrapperClasses = {
  base: 'group pointer-events-auto relative flex w-full items-center justify-between gap-6 overflow-hidden p-5 pr-8 shadow-lg transition-all',
  border: 'border border-border rounded-lg',
  state:
    'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full',
  swipe:
    'data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[swipe=end]:animate-out',
}

const toastVariants = cva(
  `${wrapperClasses.base} ${wrapperClasses.border} ${wrapperClasses.state} ${wrapperClasses.swipe}`,
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        success:
          'success border-success bg-success-softer text-success-hard dark:text-success-harder',
        error:
          'error border-error bg-error-softer text-error-hard dark:text-error-harder',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

const ToastWrapper = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})
ToastWrapper.displayName = ToastPrimitives.Root.displayName

interface ToastActionProps
  extends React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action> {}

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  ToastActionProps
>(({ className, ...props }, ref) => {
  const actionClasses = {
    base: 'inline-flex h-8 shrink-0 items-center justify-center px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-primary hover:text-primary-foreground disabled:pointer-events-none disabled:opacity-50',
    border: 'rounded-md border border-border',
    focus:
      'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
    variant:
      'group-[.error]:border-error-hard/50 group-[.success]:border-success-hard/50',
  }

  return (
    <ToastPrimitives.Action
      ref={ref}
      className={cn(
        actionClasses.base,
        actionClasses.border,
        actionClasses.focus,
        actionClasses.variant,
        className,
      )}
      {...props}
    />
  )
})
ToastAction.displayName = ToastPrimitives.Action.displayName

interface ToastCloseProps
  extends React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close> {}

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  ToastCloseProps
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      'absolute right-1.5 top-1.5 rounded-md p-1 opacity-0 ring-ring transition-opacity hover:text-foreground-hard focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100',
      className,
    )}
    toast-close=''
    {...props}
  >
    <X className='size-4' />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

interface ToastTitleProps
  extends React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title> {}

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  ToastTitleProps
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn('text-sm font-semibold', className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

interface ToastTitleProps
  extends React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description> {}

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  ToastTitleProps
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn('text-sm', className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

export type ToastProps = React.ComponentPropsWithoutRef<typeof ToastWrapper>

export type ToastActionElement = React.ReactElement<typeof ToastAction>

export const Toast = {
  Provider: ToastProvider,
  Viewport: ToastViewport,
  Wrapper: ToastWrapper,
  Title: ToastTitle,
  Description: ToastDescription,
  Close: ToastClose,
  Action: ToastAction,
}
