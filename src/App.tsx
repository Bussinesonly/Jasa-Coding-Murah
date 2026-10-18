import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ClientCategories } from './components/ClientCategories'
import { Services } from './components/Services'
import { Portfolio } from './components/Portfolio'
import { Process } from './components/Process'
import { About } from './components/About'
import { Pricing } from './components/Pricing'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'
import { CustomCursor } from './components/CustomCursor'
import { ScrollProgress } from './components/ScrollProgress'
import { ToastProvider } from './components/Toast'

function App() {
  const [route, setRoute] = useState(() => window.location.hash.slice(1) || '/')

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 72,
      disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    })
  }, [])

  useEffect(() => {
    const handleHashChange = () => setRoute(window.location.hash.slice(1) || '/')
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
    const refreshAos = window.setTimeout(() => AOS.refreshHard(), 0)
    return () => window.clearTimeout(refreshAos)
  }, [route])

  const renderPage = () => {
    switch (route) {
      case '/layanan':
        return <Services />
      case '/portofolio':
        return <Portfolio />
      case '/proses':
        return <Process />
      case '/tentang':
        return <About />
      case '/biaya':
        return <Pricing />
      case '/kontak':
        return <Contact />
      default:
        return <><Hero /><ClientCategories /></>
    }
  }

  return (
    <ToastProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-600 selection:text-white transition-colors duration-200">
        <ScrollProgress />
        <CustomCursor />
        <Navbar />

        <main id="main-content">
          {renderPage()}
        </main>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </ToastProvider>
  )
}

export default App
