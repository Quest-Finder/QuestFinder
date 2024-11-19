import type { ToastActionElement, ToastProps } from './toast'

export type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

const TOAST_ACTION_TYPES = {
  ADD_TOAST: 'ADD_TOAST',
  UPDATE_TOAST: 'UPDATE_TOAST',
  DISMISS_TOAST: 'DISMISS_TOAST',
  REMOVE_TOAST: 'REMOVE_TOAST',
} as const

type ToastActionType = typeof TOAST_ACTION_TYPES

export type AddToastType = {
  type: ToastActionType['ADD_TOAST']
  toast: ToasterToast
}
export type UpdateToastType = {
  type: ToastActionType['UPDATE_TOAST']
  toast: Partial<ToasterToast>
}
export type DismissToastType = {
  type: ToastActionType['DISMISS_TOAST']
  toastId?: ToasterToast['id']
}
export type RemoveToastType = {
  type: ToastActionType['REMOVE_TOAST']
  toastId?: ToasterToast['id']
}

export type ToastAction =
  | AddToastType
  | UpdateToastType
  | DismissToastType
  | RemoveToastType

export interface ToastState {
  toasts: ToasterToast[]
}

export type Toast = Omit<ToasterToast, 'id'>
