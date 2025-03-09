import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
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

export default App
