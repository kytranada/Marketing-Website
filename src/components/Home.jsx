import React from 'react'
import NavBar from './NavBar'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import Portfolio from './Portfolio'
import FreqAskedQues from './FreqAskedQues'
import Team from './Team'
import Clients from './Clients'
import Contact from './Contact'
import Newsletter from './Newsletter'
import Footer from './Footer'

const Home = () => {
  return (
    <div className="container min-w-full min-h-lvh secondary-font">
      <NavBar />
      <section className="w-full max-h-fit pt-16 lg:px-32 overflow-hidden bg-pastel-white border-b border-pastel-blue-light">
        <Hero />
      </section>
      <section id="about" className="w-full max-h-fit py-16 lg:px-32 overflow-hidden border-b border-pastel-blue-light">
        <About />
      </section>
      <section id="services" className="w-full max-h-fit py-16 lg:px-32 overflow-hidden bg-pastel-white border-b border-pastel-blue-light">
        <Services />
      </section>
      <section id="portfolio" className="w-full max-h-fit py-16 lg:px-32 overflow-hidden border-b border-pastel-blue-light">
        <Portfolio />
      </section>
      <section className="w-full max-h-fit py-16 lg:px-32 overflow-hidden bg-pastel-white border-b border-pastel-blue-light">
        <FreqAskedQues />
      </section>
      <section className="w-full max-h-fit py-16 lg:px-32 overflow-hidden border-b border-pastel-blue-light">
        <Team />
      </section>
      <section className="w-full max-h-fit py-16 lg:px-32 overflow-hidden bg-pastel-white border-b border-pastel-blue-light">
        <Clients />
      </section>
      <section id="contact" className="w-full max-h-fit py-16 lg:px-32 overflow-hidden border-b border-pastel-blue-light">
        <Contact />
      </section>
      <section className="w-full max-h-fit py-16 lg:px-32 overflow-hidden bg-pastel-white border-b border-pastel-blue-light">
        <Newsletter />
      </section>
      <section className="w-full max-h-fit py-16 lg:px-32 overflow-hidden border-b border-pastel-blue-light">
        <Footer />
      </section>
    </div>
  )
}

export default Home