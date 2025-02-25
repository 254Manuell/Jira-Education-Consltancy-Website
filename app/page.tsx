import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import ScheduleCall from './components/ScheduleCall'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <Services />
        <ScheduleCall />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

