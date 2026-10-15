import { useEffect } from 'react'
import type { PortfolioProject } from '../types'
import {
  X,
  CheckCircle,
  MessageCircle,
  Laptop,
  Layers,
  ArrowRight,
  ShieldCheck,
  Zap,
} from 'lucide-react'

interface ProjectModalProps {
  project: PortfolioProject | null
  onClose: () => void
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    if (project) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  if (!project) return null

  // Pre-generate WhatsApp consultation link with project reference
  const waUrl = `https://wa.me/6288989876914?text=${encodeURIComponent(
    `Halo Jasa Coding, saya tertarik dengan project ${project.title} (${project.category}). Saya ingin berkonsultasi untuk kebutuhan serupa.`
  )}`

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label="Tutup detail project"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Title */}
        <div className="pr-10">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            <span>{project.category}</span>
            <span>•</span>
            <span>{project.clientType}</span>
          </div>
          <h3
            id="modal-project-title"
            className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            {project.title}
          </h3>
        </div>

        {/* Realistic Project Screen Mockup */}
        <div className="my-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-950 overflow-hidden shadow-inner">
          <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
            </div>
            <div className="flex items-center gap-1 text-[11px]">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              <span>https://preview.jasacoding.com/{project.id}</span>
            </div>
            <div className="flex items-center gap-1 text-emerald-400 text-[10px]">
              <Zap className="w-3 h-3" />
              <span>{project.highlightMetric}</span>
            </div>
          </div>

          <div className="p-6 sm:p-8 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-slate-300">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Laptop className="w-5 h-5 text-blue-400" />
                <span className="text-white font-bold text-sm">{project.title}</span>
              </div>
              <span className="text-xs px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-mono">
                {project.highlightLabel}: {project.highlightMetric}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>
        </div>

        {/* Feature List */}
        <div className="space-y-4 mb-6">
          <h4 className="text-sm font-mono uppercase tracking-wider font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Layers className="w-4 h-4 text-blue-500" />
            <span>Spesifikasi & Solusi yang Diterapkan</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.features.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
              >
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <span className="text-xs font-mono uppercase text-slate-400 block mb-2 font-semibold">
            Teknologi yang Digunakan:
          </span>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-semibold transition-colors"
          >
            Tutup Pratinjau
          </button>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold shadow-md shadow-emerald-600/20 transition-all duration-200"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Konsultasikan Project Serupa</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  )
}
