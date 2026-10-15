import { useState } from 'react'
import { MessageCircle } from 'lucide-react'

export const FloatingWhatsApp = () => {
  const [isHovered, setIsHovered] = useState(false)
  const waUrl = 'https://wa.me/6288989876914'

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip */}
      <div
        className={`hidden sm:flex items-center px-3.5 py-1.5 rounded-full bg-slate-900/90 dark:bg-slate-800/90 text-white text-xs font-medium border border-slate-700 shadow-xl backdrop-blur-md pointer-events-none transition-all duration-200 ${
          isHovered
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-2'
        }`}
        role="tooltip"
      >
        <span>Konsultasi via WhatsApp</span>
      </div>

      {/* Floating Action Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        className="relative group w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-xl shadow-emerald-500/30 transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:ring-4 focus-visible:ring-emerald-400"
        aria-label="Konsultasi via WhatsApp resmi Jasa Coding"
      >
        {/* Pulse radar ping */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none -z-10" />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 stroke-[2.2]" />

        {/* Online Status Dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-300 border-2 border-slate-950" />
      </a>
    </div>
  )
}
