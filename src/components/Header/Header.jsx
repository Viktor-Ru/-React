import { useState } from 'react'

import './Header.css'
import Logo from '../Logo/Logo'

function Header() {
  const [time, setTime] = useState(new Date())

  // setInterval( () => setTime(new Date()), 1000 ) //BUG: Утечка памяти


  return (
    <header className='header'>
      {<Logo />}

      <p>
        Точное время: {time.toLocaleTimeString()}
      </p>
    </header>
  )
}

export default Header
