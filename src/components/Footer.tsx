import { Code2, ArrowUp, ExternalLink } from 'lucide-react'

const CURRENT_YEAR = new Date().getFullYear()

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-slate-100/50 dark:bg-slate-950 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 pb-12 border-b border-slate-200 dark:border-slate-800/80">
          {/* Brand Info */}
          <div className="max-w-md space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white">
                <Code2 className="w-4 h-4 stroke-[2.2]" />
              </div>
              <span className="font-extrabold text-lg tracking-tight text-slate-900 dark:text-white">
                JASA CODING
              </span>
            </div>

            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
              “Bangun Ide Digitalmu.”
            </p>

            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Jasa pembuatan website dan aplikasi yang dirancang sesuai kebutuhan nyata, bukan sekadar template instan. Melayani individu, UMKM, sekolah, organisasi, hingga instansi.
            </p>
          </div>

          {/* Quick Links & Channels */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs sm:text-sm">
            <div>
              <div className="font-mono uppercase text-slate-400 text-xs font-semibold mb-3">
                Navigasi
              </div>
              <ul className="space-y-2">
                <li><a href="#/" className="text-slate-600 dark:text-slate-300 hover:text-blue-500 transition-colors">Home</a></li>
                <li><a href="#/layanan" className="text-slate-600 dark:text-slate-300 hover:text-blue-500 transition-colors">Layanan</a></li>
                <li><a href="#/portofolio" className="text-slate-600 dark:text-slate-300 hover:text-blue-500 transition-colors">Portfolio</a></li>
                <li><a href="#/proses" className="text-slate-600 dark:text-slate-300 hover:text-blue-500 transition-colors">Proses</a></li>
              </ul>
            </div>

            <div>
              <div className="font-mono uppercase text-slate-400 text-xs font-semibold mb-3">
                Informasi
              </div>
              <ul className="space-y-2">
                <li><a href="#/tentang" className="text-slate-600 dark:text-slate-300 hover:text-blue-500 transition-colors">Tentang Kami</a></li>
                <li><a href="#/biaya" className="text-slate-600 dark:text-slate-300 hover:text-blue-500 transition-colors">Estimasi Biaya</a></li>
                <li><a href="#/kontak" className="text-slate-600 dark:text-slate-300 hover:text-blue-500 transition-colors">Kontak Kami</a></li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <div className="font-mono uppercase text-slate-400 text-xs font-semibold mb-3">
                Kanal Resmi
              </div>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://wa.me/6288989876914"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-slate-300 hover:text-emerald-500 transition-colors flex items-center gap-1"
                  >
                    <span>WhatsApp</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/jasacoding.murah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-slate-300 hover:text-pink-500 transition-colors flex items-center gap-1"
                  >
                    <span>Instagram</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://tiktok.com/@jasacodingmurah5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-slate-300 hover:text-cyan-500 transition-colors flex items-center gap-1"
                  >
                    <span>TikTok</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div>
            &copy; {CURRENT_YEAR} Jasa Coding. Seluruh hak cipta dilindungi.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors"
            aria-label="Kembali ke atas halaman"
          >
            <span>Kembali ke atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
