import { useState } from 'react'
import { servicesData } from '../data/servicesData'
import {
  Globe,
  LayoutDashboard,
  ShoppingBag,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Code,
} from 'lucide-react'

const iconMap = {
  website: Globe,
  'web-application': LayoutDashboard,
  ecommerce: ShoppingBag,
  'custom-system': Cpu,
}

export const Services = () => {
  const [activeServiceId, setActiveServiceId] = useState<string>('website')

  const activeService =
    servicesData.find((s) => s.id === activeServiceId) || servicesData[0]
  const ActiveIcon = iconMap[activeService.id as keyof typeof iconMap] || Globe

  return (
    <section id="layanan" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            Layanan Unggulan
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Apa yang bisa kami bangun?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Mulai dari website profil berkelas hingga sistem informasi berskala penuh. Dirancang kustom untuk hasil yang tepat sasaran.
          </p>
        </div>

        {/* Asymmetrical Interactive Services Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" data-aos="fade-up" data-aos-delay="80">
          {/* Service Selector List (Left 5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {servicesData.map((service) => {
              const isSelected = activeServiceId === service.id
              const Icon = iconMap[service.id as keyof typeof iconMap] || Globe

              return (
                <button
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`w-full text-left p-5 sm:p-6 rounded-2xl border transition-all duration-200 relative group flex items-start justify-between focus-visible:translate-x-1 ${
                    isSelected
                      ? 'bg-blue-600 dark:bg-blue-600 text-white border-blue-500 shadow-xl shadow-blue-600/20 translate-x-1'
                      : 'bg-white dark:bg-slate-900/70 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-800/90 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                  aria-pressed={isSelected}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`font-mono text-sm font-bold ${
                        isSelected ? 'text-blue-200' : 'text-slate-400 dark:text-slate-500'
                      }`}
                    >
                      {service.number}
                    </span>

                    <div>
                      <div className="flex items-center gap-2">
                        <Icon
                          className={`w-5 h-5 ${
                            isSelected ? 'text-white' : 'text-blue-500 group-hover:scale-110 transition-transform'
                          }`}
                        />
                        <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                          {service.title}
                        </h3>
                      </div>
                      <p
                        className={`text-xs sm:text-sm mt-1.5 leading-relaxed ${
                          isSelected
                            ? 'text-blue-100'
                            : 'text-slate-500 dark:text-slate-400'
                        }`}
                      >
                        {service.shortDesc}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`text-xs px-2.5 py-1 rounded-full font-medium shrink-0 ml-2 hidden sm:inline-block ${
                      isSelected
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    {service.badge}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Interactive Preview Panel (Right 7 cols) */}
          <div className="lg:col-span-7 rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-slate-900/60 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300">
            {/* Header info */}
            <div className="flex items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <ActiveIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                    Layanan {activeService.number}
                  </span>
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {activeService.title}
                  </h4>
                </div>
              </div>

              <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-600/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 font-mono">
                {activeService.badge}
              </span>
            </div>

            {/* Description */}
            <p className="py-6 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {activeService.fullDesc}
            </p>

            {/* Deliverables Checklist */}
            <div className="space-y-3 pb-6">
              <span className="text-xs uppercase font-mono tracking-wider text-slate-400 font-semibold block">
                Cakupan Fitur & Hasil Pekerjaan:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeService.deliverables.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200 p-2.5 rounded-lg bg-white dark:bg-slate-950/50 border border-slate-200/80 dark:border-slate-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack & Ideal Audience */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-400 font-mono block mb-1">
                  Teknologi Utama:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeService.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1 text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      <Code className="w-3 h-3 text-blue-500" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="#kontak"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all duration-200 shadow-sm shrink-0"
              >
                <span>Konsultasikan Ini</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
