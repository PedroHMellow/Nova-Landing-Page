import BenefitsSection from './components/BenefitsSection'
import FaqSection from './components/FaqSection'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import HowItWorksSection from './components/HowItWorksSection'
import ProblemSection from './components/ProblemSection'
import { ThemeProvider } from './components/ThemeProvider'
import WaitlistSection from './components/WaitlistSection'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white text-gray-900 transition-colors duration-500 dark:bg-gray-950 dark:text-slate-100">
        <Header />
        <main>
          <HeroSection />
          <ProblemSection />
          <HowItWorksSection />
          <BenefitsSection />
          <FaqSection />
          <WaitlistSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
