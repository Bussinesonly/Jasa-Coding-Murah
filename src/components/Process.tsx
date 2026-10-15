import { useState } from 'react'
import { processSteps } from '../data/processData'
import {
  MessageSquare,
  Compass,
  Palette,
  Code2,
  CheckCheck,
  Rocket,
  Clock,
  FileCheck,
} from 'lucide-react'

const stepIcons = [
  MessageSquare,
  Compass,
  Palette,
  Code2,
  CheckCheck,
  Rocket,
]

export const Process = () => {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="proses" className="py-24 sm:py-32 bg-slate-50/50 dark:bg-slate-950/40 border-y border-slate-200/80 dark:border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Alur Pengerjaan Transparan
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-3 leading-tight">
            Dari ide menjadi produk.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Enam tahapan terstruktur yang memastikan setiap fitur dibangun sesuai kesepakatan, tepat waktu, dan tanpa biaya tersembunyi.
          </p>
        </div>

        {/* Interactive Timeline Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {processSteps.map((step, idx) => {
            const Icon = stepIcons[idx] || Code2
            const isCurrent = activeStep === idx

            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(idx)}
                onMouseEnter={() => setActiveStep(idx)}
                className={`p-7 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                  isCurrent
                    ? 'border-blue-500 bg-white dark:bg-slate-900 shadow-xl shadow-blue-600/10 -translate-y-1'
                    : 'border-slate-200 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/40 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`font-mono text-xl font-bold transition-colors ${
                        isCurrent
                          ? 'text-blue-600 dark:text-blue-400'
                          : 'text-slate-300 dark:text-slate-600'
                      }`}
                    >
                      {step.number}
                    </span>

                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isCurrent
                          ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/60 space-y-2 text-xs">
                  <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span>Estimasi Waktu: <strong className="text-slate-700 dark:text-slate-200">{step.duration}</strong></span>
                  </div>
                  <div className="flex items-start gap-1.5 text-slate-500 dark:text-slate-400">
                    <FileCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{step.deliverables}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
