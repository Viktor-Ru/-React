import './Header.css'
import Logo from '../Logo/Logo'

function Header() {
  const date = new Date()

  return (
    <header className='header'>
      {<Logo />}

      <p>
        Точное время: {date.toLocaleTimeString()}
      </p>
    </header>
  )
}

export default Header
