import About from "../components/About"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Features from "../components/Features"
import Contact from "../components/Contact"

const LandingPage = () => {
  return (
    <>
      <main className='overflow-x-hidden antialiased textneutral-800'>
          <Navbar />
          <Hero />
          <About />
          <Features />
          <Contact />
      </main>
    </>
  )
}

export default LandingPage