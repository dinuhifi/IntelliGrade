import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/IntelliGrade-logo.png'
import { RiCloseLine, RiMenu3Line } from '@remixicon/react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

  return (
    <nav className='border-b-2'>
        <div className='max-w-7xl mx-auto flex justify-between items-center py-6'>

            <div className='pl-2'>
                <a href='#hero'>
                    <img src={logo} width={120} height={10} alt='IntelliGrade'></img>
                </a>
            </div>

            <div className='md:hidden'>
                <button onClick={toggleMenu} className='pr-2 text-2xl focus:outline-none' aria-label={isOpen ? "Close Menu" : "Open Menu"}>
                    {isOpen ? <RiCloseLine/> : <RiMenu3Line/>}
                </button>
            </div>

            <div className='hidden md:flex space-x-8 md:space-x-4 pr-2'>
                <a className='uppercase text-sm font-medium hover:text-green-400 transition transform hover:scale-105' href='#about'>About</a>
                <a className='uppercase text-sm font-medium hover:text-green-400 transition transform hover:scale-105' href='#features'>Features</a>
                <a className='uppercase text-sm font-medium hover:text-green-400 transition transform hover:scale-105' href='#contact'>Contact</a>
                <Link to='/teacher/signup' onClick={toggleMenu}>
                    <button onClick="" className='uppercase text-white font-semibold text-sm bg-black px-4 py-1 hover:bg-green-600 hover:text-neutral transition rounded-md shadow-md transform hover:scale-105 relative -top-1'>Join Now!</button>
                </Link>
            </div>

        </div>

        <div className={`${isOpen ? "block" : "hidden"} md:hidden absolute bg-neutral-50 w-full py-5 px-4 mt-2 border-b-4`}>
            <a onClick={toggleMenu} className='uppercase text-lg font-medium block py-2 tracking-wide' href='#about'>About</a>  
            <a onClick={toggleMenu} className='uppercase text-lg font-medium block py-2 tracking-wide' href='#features'>Features</a>  
            <a onClick={toggleMenu} className='uppercase text-lg font-medium block py-2 tracking-wide' href='#contact'>Contact</a>
            <Link to='/teacher/signup' onClick={toggleMenu}>
                <button className='uppercase text-lg font-semibold block tracking-wide text-white bg-black rounded-md shadow-md px-2 py-2 mt-1'>Join Now!</button>
            </Link>
        </div>

    </nav>
  )
}

export default Navbar