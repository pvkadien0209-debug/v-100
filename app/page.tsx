import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Pricing from '@/components/Pricing'
import Workflow from '@/components/Workflow'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Workflow />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}
