import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BrowserMockup from './components/BrowserMockup'
import TimeSavings from './components/TimeSavings'
import MoneySavings from './components/MoneySavings'
import Features from './components/Features'
import ArchitectureDiagram from './components/ArchitectureDiagram'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />
      <main>
        <Hero />
        <BrowserMockup />
        <ArchitectureDiagram />
        <TimeSavings />
        <MoneySavings />
        <Features />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
