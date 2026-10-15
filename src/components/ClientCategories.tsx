import {
  Store,
  Briefcase,
  GraduationCap,
  Users2,
  HeartHandshake,
  Landmark,
} from 'lucide-react'

const clientCategories = [
  {
    name: 'UMKM',
    role: 'Toko online, landing page promosi, katalog produk terhubung WhatsApp',
    icon: Store,
    accent: 'hover:text-blue-500',
  },
  {
    name: 'Bisnis',
    role: 'Company profile korporasi, sistem administrasi, otomasi workflow',
    icon: Briefcase,
    accent: 'hover:text-cyan-500',
  },
  {
    name: 'Sekolah',
    role: 'Sistem informasi akademik, portal PPDB online, database kelulusan',
    icon: GraduationCap,
    accent: 'hover:text-emerald-500',
  },
  {
    name: 'Organisasi',
    role: 'Website profil resmi, portal donasi, sistem keanggotaan terverifikasi',
    icon: Users2,
    accent: 'hover:text-purple-500',
  },
  {
    name: 'Komunitas',
    role: 'Portal pendaftaran acara, direktori anggota, publikasi buletin',
    icon: HeartHandshake,
    accent: 'hover:text-amber-500',
  },
  {
    name: 'Instansi',
    role: 'Layanan publik digital, dashboard transparansi, form pengaduan',
    icon: Landmark,
    accent: 'hover:text-indigo-500',
  },
]

export const ClientCategories = () => {
  return (
    <section className="py-14 border-y border-slate-200/80 dark:border-white/5 bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8" data-aos="fade-up">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold">
              Klien & Sektor
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
              Dibangun untuk berbagai kebutuhan digital.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md">
            Setiap sektor memiliki dinamika dan sasaran tersendiri. Kami menyesuaikan arsitektur sistem agar tepat guna dan langsung berdampak.
          </p>
        </div>

        {/* Editorial Typography Grid - NOT 6 large uniform cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3" data-aos="fade-up" data-aos-delay="80">
          {clientCategories.map((cat, idx) => {
            const Icon = cat.icon

            return (
              <div
                key={cat.name}
                className="group p-4 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 transition-colors duration-200 flex flex-col justify-between hover:border-blue-500/50 hover:bg-blue-50/40 dark:hover:bg-blue-950/20"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-slate-400">0{idx + 1}</span>
                  <Icon className={`w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors ${cat.accent}`} />
                </div>

                <div>
                  <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                    {cat.name}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 mt-1 leading-normal">
                    {cat.role}
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
