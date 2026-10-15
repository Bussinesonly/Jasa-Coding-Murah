import { useState, useRef } from 'react'
import {
  ArrowRight,
  FolderGit2,
  Gauge,
  CheckCircle,
  Sparkles,
  Layers,
  ShieldCheck,
  Zap,
} from 'lucide-react'

export const Hero = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    // Very subtle tilt (maximum 4 degrees)
    const rotateX = ((y - centerY) / centerY) * -4
    const rotateY = ((x - centerX) / centerX) * 4

    setTilt({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 flex flex-col justify-center overflow-hidden"
    >
      {/* Subtle background glow accent - deliberate and strictly confined */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-blue-600/10 dark:bg-blue-600/15 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Studio Tagline Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Studio Pengembangan Software & Web Terpercaya</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.1] mb-6">
            Bangun Ide <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500">Digitalmu.</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-8">
            Kami membantu mengubah ide menjadi website, aplikasi, dan sistem digital yang cepat, modern, dan sesuai kebutuhan bisnis Anda.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
            <a
              href="#kontak"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base shadow-lg shadow-blue-600/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Mulai Konsultasi</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#portfolio"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-semibold text-base border border-slate-200 dark:border-slate-800 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <FolderGit2 className="w-4 h-4 text-slate-500 dark:text-slate-400" />
              <span>Lihat Portfolio</span>
            </a>
          </div>

          {/* Micro Category Text */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
            <span>Website</span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span>Web App</span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span>Sistem Informasi</span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span>Custom Application</span>
          </div>
        </div>

        {/* Hero Digital Product Mockup with Micro-interaction Tilt */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="mt-14 sm:mt-18 max-w-5xl mx-auto perspective-1000 transition-transform duration-200 ease-out"
          style={{
            transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          }}
        >
          <div className="relative rounded-2xl border border-slate-200/90 dark:border-white/10 bg-slate-900/90 dark:bg-slate-950/90 shadow-2xl backdrop-blur-xl overflow-hidden">
            {/* Top Browser Bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-950/80">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>

              {/* URL Pill */}
              <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>jasacoding.com/client-system/live-preview</span>
              </div>

              {/* Performance Indicator */}
              <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-0.5 rounded-full">
                <Zap className="w-3 h-3" />
                <span>Siap untuk ditinjau</span>
              </div>
            </div>

            {/* Mockup Product Body: High Fidelity Web/App Interface */}
            <div className="p-5 sm:p-7 bg-gradient-to-b from-slate-900/90 to-slate-950/95 text-left text-slate-200">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Left Mini Sidebar / Navigation */}
                <div className="hidden lg:block lg:col-span-3 space-y-4 border-r border-slate-800/80 pr-5">
                  <div className="flex items-center gap-2.5 text-white font-bold text-sm pb-3 border-b border-slate-800">
                    <Layers className="w-4 h-4 text-blue-400" />
                    <span>Control Panel</span>
                  </div>

                  <div className="space-y-1 text-xs">
                    <div className="px-3 py-2 rounded-lg bg-blue-600/15 text-blue-400 font-semibold flex items-center justify-between">
                      <span>Ringkasan Bisnis</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    </div>
                    <div className="px-3 py-2 rounded-lg text-slate-400 hover:text-slate-200 transition-colors">
                      Katalog & Transaksi
                    </div>
                    <div className="px-3 py-2 rounded-lg text-slate-400 hover:text-slate-200 transition-colors">
                      Data Pengguna & Peran
                    </div>
                    <div className="px-3 py-2 rounded-lg text-slate-400 hover:text-slate-200 transition-colors">
                      Integrasi WhatsApp API
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80">
                    <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 text-[11px] text-slate-400">
                      <div className="text-white font-medium mb-1">Status Proyek</div>
                      <div className="flex items-center gap-1.5 text-emerald-400">
                        <CheckCircle className="w-3 h-3" />
                        <span>Siap untuk ditinjau</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Main Interface Display */}
                <div className="lg:col-span-9 space-y-5">
                  {/* Top Stats Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/90">
                      <div className="text-[11px] text-slate-400 uppercase font-mono">Prioritas</div>
                      <div className="text-lg sm:text-xl font-bold text-white mt-1 flex items-center gap-2">
                        <span>Responsif</span>
                        <span className="text-[10px] text-emerald-400 font-normal">Untuk pengguna</span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/90">
                      <div className="text-[11px] text-slate-400 uppercase font-mono">Arsitektur</div>
                      <div className="text-lg sm:text-xl font-bold text-white mt-1">
                        Dirancang khusus
                      </div>
                    </div>

                    <div className="col-span-2 sm:col-span-1 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/90">
                      <div className="text-[11px] text-slate-400 uppercase font-mono">Pengujian</div>
                      <div className="text-lg sm:text-xl font-bold text-blue-400 mt-1 flex items-center gap-1.5">
                        <Gauge className="w-4 h-4 text-blue-400" />
                        <span>Siap diuji</span>
                      </div>
                    </div>
                  </div>

                  {/* Clean Code & Live Visual Split */}
                  <div className="rounded-xl border border-slate-800 bg-slate-950/90 p-4 font-mono text-xs overflow-x-auto">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80 text-[11px] text-slate-400">
                      <span className="text-blue-400 font-semibold flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        ProductionReadyApp.tsx
                      </span>
                      <span>TypeScript • React</span>
                    </div>
                    <pre className="text-slate-300 leading-relaxed">
                      <code>
                        <span className="text-purple-400">const</span>{' '}
                        <span className="text-blue-300">clientProject</span> ={' '}
                        <span className="text-purple-400">await</span> JasaCoding.
                        <span className="text-amber-300">buildSolution</span>({`{\n`}
                        {`  target: `}
                        <span className="text-emerald-300">'Modern Web Application'</span>
                        {`,\n  performance: `}
                        <span className="text-cyan-300">'High-Speed LCP'</span>
                        {`,\n  architecture: `}
                        <span className="text-emerald-300">'Modular & Scalable'</span>
                        {`,\n  support: `}
                        <span className="text-emerald-300">'Pendampingan proyek'</span>
                        {`\n})`}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
