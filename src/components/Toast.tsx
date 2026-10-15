import React, { createContext, useContext, useState, useCallback } from 'react'
import { CheckCircle2, X } from 'lucide-react'

export interface ToastContextType {
  showToast: (message: string) => void
}

export const ToastContext = createContext<ToastContextType | undefined>(undefined)

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  const showToast = useCallback((message: string) => {
    setToastMessage(message)
    const timer = setTimeout(() => {
      setToastMessage(null)
    }, 3500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3 rounded-full bg-slate-900/95 dark:bg-slate-800/95 text-white text-sm font-medium border border-slate-700/80 shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-4 duration-200"
        >
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="p-1 text-slate-400 hover:text-white rounded-full transition-colors ml-1"
            aria-label="Tutup notifikasi"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </ToastContext.Provider>
  )
}

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within ToastProvider')
  }
  return context
}
