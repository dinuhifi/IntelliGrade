import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-10xl font-bold underline italic">
      Hello world!
    </h1>
    </>
  )
}

export default App
