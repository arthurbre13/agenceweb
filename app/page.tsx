'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import About from '@/components/About'
import WorkMethod from '@/components/WorkMethod'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Blog from '@/components/Blog'
import Security from '@/components/Security'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <WorkMethod />
      <Testimonials />
      <Blog />
      <Security />
      <Contact />
      <Footer />
    </main>
  )
}
