import { ArrowRight, CheckCircle2 } from 'lucide-react'

const pricingFactors = [
  {
    title: 'Landing Page & Website Sederhana',
    range: 'Mulai Rp100.000 - Rp500.000+',
    desc: 'Cocok untuk profil satu halaman, tautan bio profesional, portofolio ringkas, atau promosi event cepat.',
    includes: ['Desain responsif mobile', 'Tombol WhatsApp terintegrasi', 'Optimasi kecepatan kilat', 'Pengerjaan 1-3 hari'],
  },
  {
    title: 'Company Profile & Website Organisasi',
    range: 'Mulai Rp500.000 - Rp2.000.000+',
    desc: 'Multi-halaman lengkap, manajemen konten artikel/kegiatan, galeri, formulir kontak, dan optimasi SEO.',
    includes: ['Struktur multi-halaman', 'Sistem kelola artikel/berita', 'Domain & hosting disiapkan', 'Bimbingan kelola mandiri'],
  },
  {
    title: 'Web App & Sistem Informasi Custom',
    range: 'Sesuai Ruang Lingkup (Scope)',
    desc: 'Aplikasi web dengan alur kerja spesifik, autentikasi pengguna, manajemen database, dan integrasi API.',
    includes: ['Arsitektur database kustom', 'Hak akses multi-peran (RBAC)', 'Laporan analitik data', 'Garansi bug & maintenance'],
  },
]

export const Pricing = () => {
  return (
    <section id="biaya" className="py-24 sm:py-32 bg-slate-50/50 dark:bg-slate-950/40 border-y border-slate-200/80 dark:border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16" data-aos="fade-up">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Transparansi Biaya
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-3 leading-tight">
            Mulai dari Rp100.000.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Harga menyesuaikan kebutuhan, fitur, dan tingkat kompleksitas project. Kami memastikan setiap rupiah yang Anda investasikan bernilai guna tinggi.
          </p>
        </div>

        {/* Pricing Guidance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="80">
          {pricingFactors.map((tier, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Kategori 0{idx + 1}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  {tier.title}
                </h3>
                <div className="text-base sm:text-lg font-bold font-mono text-blue-600 dark:text-blue-400 mt-2 mb-3">
                  {tier.range}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {tier.desc}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  {tier.includes.map((inc, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80">
                <a
                  href="#kontak"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <span>Minta Rincian Biaya</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Central CTA Banner */}
        <div className="max-w-2xl mx-auto text-center p-8 rounded-3xl bg-blue-600 text-white shadow-xl shadow-blue-600/20">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
            Ingin estimasi akurat untuk ide Anda?
          </h3>
          <p className="text-sm text-blue-100 mt-2 max-w-lg mx-auto">
            Sampaikan deskripsi singkat kebutuhan sistem Anda, kami akan memberikan estimasi waktu dan biaya terbaik tanpa komitmen.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#kontak"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-blue-600 hover:bg-blue-50 font-semibold text-sm transition-colors shadow-sm"
            >
              <span>Konsultasi untuk Estimasi</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
