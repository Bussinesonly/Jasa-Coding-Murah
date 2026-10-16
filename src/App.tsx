import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ClientCategories } from './components/ClientCategories'
import { Services } from './components/Services'
import { Benefits } from './components/Benefits'
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
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 72,
      disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    })
  }, [])

  return (
    <ToastProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-600 selection:text-white transition-colors duration-200">
        <ScrollProgress />
        <CustomCursor />
        <Navbar />

        <main id="main-content">
          <Hero />
          <ClientCategories />
          <Services />
          <Benefits />
          <Portfolio />
          <Process />
          <About />
          <Pricing />
          <Contact />
        </main>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </ToastProvider>
  )
}

export default App
