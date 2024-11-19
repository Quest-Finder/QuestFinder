'use client'

import React from 'react'

import {
  type Toast,
  type ToastAction,
  type ToasterToast,
  type ToastState,
} from './types'

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

let count = 0
let toastState: ToastState = { toasts: [] }

const removeQueue = new Map<string, ReturnType<typeof setTimeout>>()
const toastListeners: Array<(state: ToastState) => void> = []

function generateId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

const addToRemoveQueue = (toastId: string) => {
  if (removeQueue.has(toastId)) {
    return
  }

  const removeToast = setTimeout(() => {
    removeQueue.delete(toastId)
    // eslint-disable-next-line no-use-before-define
    dispatch({ type: 'REMOVE_TOAST', toastId })
  }, TOAST_REMOVE_DELAY)

  removeQueue.set(toastId, removeToast)
}

export function reducer(state: ToastState, action: ToastAction): ToastState {
  switch (action.type) {
    case 'ADD_TOAST':
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case 'UPDATE_TOAST':
      return {
        ...state,
        toasts: state.toasts.map(item =>
          item.id === action.toast.id ? { ...item, ...action.toast } : item,
        ),
      }

    case 'DISMISS_TOAST': {
      const { toastId } = action

      // Side effects for dismissing toasts
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach(item => addToRemoveQueue(item.id))
      }

      return {
        ...state,
        toasts: state.toasts.map(item =>
          item.id === toastId || toastId === undefined
            ? { ...item, open: false }
            : item,
        ),
      }
    }

    case 'REMOVE_TOAST':
      if (action.toastId === undefined) {
        return { ...state, toasts: [] }
      }
      return {
        ...state,
        toasts: state.toasts.filter(item => item.id !== action.toastId),
      }

    default:
      return state
  }
}

function dispatch(action: ToastAction) {
  toastState = reducer(toastState, action)
  toastListeners.forEach(listener => {
    listener(toastState)
  })
}

function toast({ ...props }: Toast) {
  const id = generateId()

  function update(updateProps: ToasterToast) {
    dispatch({ type: 'UPDATE_TOAST', toast: { ...updateProps, id } })
  }

  function dismiss() {
    dispatch({ type: 'DISMISS_TOAST', toastId: id })
  }

  dispatch({
    type: 'ADD_TOAST',
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: open => {
        if (!open) dismiss()
      },
    },
  })

  return { id, dismiss, update }
}

function useToast() {
  const [state, setState] = React.useState<ToastState>(toastState)

  React.useEffect(() => {
    toastListeners.push(setState)
    return () => {
      const index = toastListeners.indexOf(setState)
      if (index > -1) {
        toastListeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: 'DISMISS_TOAST', toastId }),
  }
}

export { useToast, toast }
