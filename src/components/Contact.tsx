import { useState } from 'react'
import {
  MessageCircle,
  Copy,
  Check,
  Send,
  ExternalLink,
  Sparkles,
} from 'lucide-react'
import { useToast } from './Toast'

export const Contact = () => {
  const { showToast } = useToast()
  const [copied, setCopied] = useState(false)

  // Interactive Form State for WhatsApp Message Formulation
  const [clientName, setClientName] = useState('')
  const [projectType, setProjectType] = useState('Website')
  const [projectDetails, setProjectDetails] = useState('')

  const rawPhone = '6288989876914'
  const displayPhone = '+62 889-8987-6914'
  const directWaUrl = `https://wa.me/${rawPhone}`

  const copyPhoneNumber = async () => {
    try {
      if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(displayPhone)
      } else {
        const textarea = document.createElement('textarea')
        textarea.value = displayPhone
        textarea.style.position = 'fixed'
        textarea.style.opacity = '0'
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand('copy')
        document.body.removeChild(textarea)
      }
      setCopied(true)
      showToast('Nomor WhatsApp berhasil disalin ke clipboard!')
      setTimeout(() => setCopied(false), 2500)
    } catch {
      showToast('Gagal menyalin nomor, silakan klik tautan langsung.')
    }
  }

  const handleSendForm = (e: React.FormEvent) => {
    e.preventDefault()
    const greeting = clientName.trim()
      ? `Halo Jasa Coding, saya ${clientName.trim()}.`
      : 'Halo Jasa Coding.'
    const typeText = `Saya ingin berkonsultasi mengenai pembuatan ${projectType}.`
    const detailsText = projectDetails.trim()
      ? `\n\nDetail kebutuhan:\n${projectDetails.trim()}`
      : ''
    const fullText = `${greeting} ${typeText}${detailsText}\n\nMohon info estimasi dan alur pengerjaannya. Terima kasih!`

    const generatedUrl = `https://wa.me/${rawPhone}?text=${encodeURIComponent(fullText)}`
    window.open(generatedUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="kontak" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Mulai Diskusi
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-3 leading-tight">
            Punya ide? Mari wujudkan.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Ceritakan kebutuhanmu. Kami akan membantu menentukan solusi digital yang paling sesuai dengan anggaran dan target Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Left Column: Official Direct Channels */}
          <div className="lg:col-span-5 space-y-4">
            {/* Primary Channel: WhatsApp */}
            <div className="p-6 sm:p-7 rounded-3xl border border-emerald-500/30 bg-emerald-50/30 dark:bg-emerald-950/20 backdrop-blur-xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-md shadow-emerald-500/25">
                  <MessageCircle className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Respon Cepat</span>
                </div>
              </div>

              <div className="text-xs font-mono uppercase text-emerald-700 dark:text-emerald-400 font-bold">
                WhatsApp Resmi
              </div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-slate-900 dark:text-white mt-1">
                {displayPhone}
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                Konsultasikan langsung ide project Anda, dapatkan tanggapan dan estimasi biaya secara bersahabat.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row items-center gap-2.5">
                <a
                  href={directWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-md shadow-emerald-600/25 transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat via WhatsApp</span>
                </a>

                <button
                  onClick={copyPhoneNumber}
                  type="button"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl border border-emerald-600/40 hover:bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 text-sm font-semibold transition-colors"
                  aria-label="Salin nomor WhatsApp"
                  title="Salin nomor ke clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span>Tersalin</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Salin</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Instagram Channel */}
            <a
              href="https://instagram.com/jasacoding.murah"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:border-pink-500/50 hover:shadow-md transition-all duration-200 flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shrink-0">
                  {/* Official Instagram Camera Glyph SVG */}
                  <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Instagram Resmi</div>
                  <div className="text-base font-bold text-slate-900 dark:text-white group-hover:text-pink-500 transition-colors">
                    @jasacoding.murah
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-pink-500 transition-colors" />
            </a>

            {/* TikTok Channel */}
            <a
              href="https://tiktok.com/@jasacodingmurah5"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:border-cyan-500/50 hover:shadow-md transition-all duration-200 flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-slate-950 text-white flex items-center justify-center border border-slate-800 shrink-0">
                  {/* Official TikTok Note SVG */}
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.16 1.18 2.09 2.35 2.34.88.19 1.82.01 2.56-.47.6-.39.99-.98 1.13-1.67.14-.62.11-1.27.11-1.91V.02z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">TikTok Resmi</div>
                  <div className="text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                    @jasacodingmurah5
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-500 transition-colors" />
            </a>
          </div>

          {/* Right Column: Pre-Formatted Consultation Message Builder */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 shadow-sm backdrop-blur-xl">
            <div className="flex items-center gap-2 mb-2 text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Format Pesan Konsultasi Cepat</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Kirim Rincian Ide via WhatsApp
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 mb-6">
              Isi formulir ringkas di bawah. Sistem akan otomatis memformat pesan WhatsApp yang rapi dan sopan untuk langsung Anda kirimkan.
            </p>

            <form onSubmit={handleSendForm} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase text-slate-700 dark:text-slate-300 font-semibold mb-1.5">
                  Nama Anda / Organisasi
                </label>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Contoh: Budi Santoso / PT Sejahtera Bersama"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-700 dark:text-slate-300 font-semibold mb-1.5">
                  Jenis Solusi yang Dibutuhkan
                </label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none transition-colors"
                >
                  <option value="Website Company Profile">Website Company Profile</option>
                  <option value="Landing Page Promosi">Landing Page Promosi</option>
                  <option value="Web Application / Dashboard">Web Application / Dashboard</option>
                  <option value="Toko Online / E-Commerce">Toko Online / E-Commerce</option>
                  <option value="Sistem Informasi Sekolah / PPDB">Sistem Informasi Sekolah / PPDB</option>
                  <option value="Sistem Custom Khusus">Sistem Custom Khusus</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-700 dark:text-slate-300 font-semibold mb-1.5">
                  Catatan Tambahan (Opsional)
                </label>
                <textarea
                  rows={3}
                  value={projectDetails}
                  onChange={(e) => setProjectDetails(e.target.value)}
                  placeholder="Contoh: Butuh integrasi pembayaran online dan target selesai dalam 2 minggu."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/25 transition-all duration-200 active:scale-98"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Format Pesan ke WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
