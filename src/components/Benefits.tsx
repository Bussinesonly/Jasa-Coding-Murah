import { Zap, Smartphone, Sliders, TrendingUp, GitBranch } from 'lucide-react'

const benefits = [
  {
    title: 'Fast',
    subtitle: 'Kecepatan Muat Maksimal',
    description: 'Website dibuat dengan perhatian mendalam terhadap performa. Skor Google Lighthouse 95+, asset gambar terkompresi modern (WebP/AVIF), dan zero unnecessary bloatware.',
    icon: Zap,
    metric: '< 0.8s',
    metricLabel: 'Rata-rata Waktu Akses',
  },
  {
    title: 'Responsive',
    subtitle: 'Presisi Lintas Perangkat',
    description: 'Tampilan optimal pada desktop, laptop, tablet, hingga smartphone layar kecil. Mengikuti standar tap target jempol 44px+ dan tata letak yang beradaptasi secara elegan.',
    icon: Smartphone,
    metric: '100%',
    metricLabel: 'Kesesuaian Layar',
  },
  {
    title: 'Custom',
    subtitle: 'Dirancang Sesuai Kebutuhan',
    description: 'Tidak terpaku pada template kaku atau tema pasaran. Setiap baris kode dan komponen antarmuka disesuaikan langsung dengan model bisnis dan alur operasional Anda.',
    icon: Sliders,
    metric: '0%',
    metricLabel: 'Ketergantungan Template',
  },
  {
    title: 'Scalable',
    subtitle: 'Siap Bertumbuh',
    description: 'Struktur kode dibuat agar dapat dikembangkan ketika kebutuhan fitur bertambah di kemudian hari tanpa harus merombak sistem dari nol.',
    icon: TrendingUp,
    metric: 'Modular',
    metricLabel: 'Arsitektur Komponen',
  },
  {
    title: 'Maintainable',
    subtitle: 'Mudah Dirawat & Diperluas',
    description: 'Kode ditulis bersih, berstandar industri dengan TypeScript dan dokumentasi jelas. Memudahkan tim internal maupun developer mana pun untuk meneruskan proyek.',
    icon: GitBranch,
    metric: 'Clean Code',
    metricLabel: 'Standar Industri',
  },
]

export const Benefits = () => {
  return (
    <section className="py-24 sm:py-32 bg-slate-100/60 dark:bg-slate-900/30 border-y border-slate-200/80 dark:border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Standar Kualitas Teknis
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-3 leading-tight">
            Bukan sekadar terlihat bagus.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Estetika visual adalah pintu masuk, namun keandalan performa, arsitektur kokoh, dan kemudahan pengembangan jangka panjang adalah fondasi utama kami.
          </p>
        </div>

        {/* Varied Grid Layout for 5 Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => {
            const Icon = b.icon
            const isWide = i === 0 || i === 3

            return (
              <div
                key={b.title}
                className={`p-7 rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/70 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 flex flex-col justify-between group ${
                  isWide ? 'lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/10 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-slate-400">Pilar 0{i + 1}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {b.title}
                  </h3>
                  <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-0.5 mb-2.5">
                    {b.subtitle}
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {b.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono">
                    {b.metricLabel}
                  </span>
                  <span className="text-sm font-bold font-mono text-slate-900 dark:text-white">
                    {b.metric}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
