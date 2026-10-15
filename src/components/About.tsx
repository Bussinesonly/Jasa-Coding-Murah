import { CheckCircle2 } from 'lucide-react'

const stats = [
  { value: '10+', label: 'Project Terselesaikan', note: 'Bisnis, UMKM & Sekolah' },
  { value: '5+', label: 'Jenis Solusi Digital', note: 'Web, App, Sistem Informasi' },
  { value: '100%', label: 'Kustom & Orisinal', note: 'Bukan template generator' },
  { value: '24/7', label: 'Dukungan Konsultasi', note: 'Responsif via WhatsApp' },
]

export const About = () => {
  return (
    <section id="tentang" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Tentang Jasa Coding
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-3 leading-tight">
              Kami membuat teknologi terasa lebih sederhana.
            </h2>

            <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Jasa Coding didirikan dengan satu prinsip tegas: setiap bisnis dan instansi layak mendapatkan sistem digital yang handal tanpa kerumitan teknis atau biaya membengkak.
            </p>

            <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Kami tidak menjual template instan yang kaku. Kami mendengarkan kebutuhan nyata Anda, merancang arsitektur sistem yang pas, dan mendampingi hingga produk berjalan stabil di tangan pengguna akhir.
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Transparansi alur kerja dan estimasi biaya di awal kesepakatan</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Hak kepemilikan penuh atas kode sumber dan akses server</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Pendampingan teknis dan konsultasi berkala setelah peluncuran</span>
              </div>
            </div>
          </div>

          {/* Right Stats & Studio Highlights */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 shadow-sm flex flex-col justify-between"
              >
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-900 dark:text-white tracking-tight">
                  {item.value}
                </div>
                <div className="mt-3">
                  <div className="text-sm font-bold text-slate-800 dark:text-slate-200">
                    {item.label}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    {item.note}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
