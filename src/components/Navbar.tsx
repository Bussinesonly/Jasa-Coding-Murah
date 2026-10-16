import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon, ArrowUpRight, Code2 } from 'lucide-react'
import { useTheme } from '../context/useTheme'

const navLinks = [
  { name: 'Home', href: '#/' },
  { name: 'Layanan', href: '#/layanan' },
  { name: 'Portfolio', href: '#/portofolio' },
  { name: 'Proses', href: '#/proses' },
  { name: 'Tentang', href: '#/tentang' },
  { name: 'Biaya', href: '#/biaya' },
  { name: 'Kontak', href: '#/kontak' },
]

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const activePath = window.location.hash || '#/'

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileOpen) {
        setIsMobileOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMobileOpen])

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 dark:bg-slate-950/85 bg-white/90 backdrop-blur-md border-b border-slate-200/80 dark:border-white/10 shadow-sm py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a
            href="#/"
            className="flex items-center gap-2.5 group focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
            aria-label="Jasa Coding - Halaman Utama"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-sm shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
              <Code2 className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-base sm:text-lg text-slate-900 dark:text-white leading-none">
                JASA CODING
              </span>
              <span className="text-[10px] tracking-wider text-slate-500 dark:text-slate-400 uppercase font-mono mt-0.5">
                Digital Studio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Menu Utama">
            {navLinks.map((link) => {
              const isActive = activePath === link.href
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors relative ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400 font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-blue-600 dark:bg-blue-400 rounded-full" />
                  )}
                </a>
              )
            })}
          </nav>

          {/* Right Action Area (Theme toggle + CTA) */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="w-11 h-11 inline-flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
              aria-label={theme === 'dark' ? 'Ganti ke tema terang' : 'Ganti ke tema gelap'}
              title={theme === 'dark' ? 'Tema Terang' : 'Tema Gelap'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-300" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Primary CTA */}
            <a
              href="#/kontak"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white shadow-sm shadow-blue-600/25 transition-all duration-200 active:scale-98"
            >
              <span>Konsultasi Gratis</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Actions (Theme Toggle & Hamburger Menu) */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="w-11 h-11 inline-flex items-center justify-center text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Ganti mode tampilan"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-300" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" />
              )}
            </button>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="w-11 h-11 inline-flex items-center justify-center rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-expanded={isMobileOpen}
              aria-label={isMobileOpen ? 'Tutup menu' : 'Buka menu navigasi'}
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 top-[65px] z-40 bg-slate-950/70 backdrop-blur-sm md:hidden ui-fade-in"
          onClick={() => setIsMobileOpen(false)}
        >
          <div
            className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-6 shadow-xl flex flex-col gap-4 ui-slide-in-from-top"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col gap-2" aria-label="Menu Mobile">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="px-4 py-3 rounded-lg text-base font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-slate-400 font-mono">#</span>
                </a>
              ))}
            </nav>

            <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
              <a
                href="#/kontak"
                onClick={() => setIsMobileOpen(false)}
                className="w-full py-3 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-center flex items-center justify-center gap-2 shadow-md shadow-blue-600/30 transition-colors"
              >
                <span>Konsultasi Gratis</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
