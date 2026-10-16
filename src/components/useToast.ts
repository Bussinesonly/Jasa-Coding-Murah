import { useContext } from 'react'
import { ToastContext, type ToastContextType } from './toastContext'

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within ToastProvider')
  }
  return context
}
