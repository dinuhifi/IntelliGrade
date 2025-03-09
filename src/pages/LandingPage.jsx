import About from "../components/About"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"

const LandingPage = () => {
  return (
    <>
      <main className='overflow-x-hidden antialiased textneutral-800'>
          <Navbar />
          <Hero />
          <About />
      </main>
    </>
  )
}

export default LandingPage