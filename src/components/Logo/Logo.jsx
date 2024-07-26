import './Logo.css'
import logo from '../../assets/react.svg'

function Logo() {
  const alt = 'логотип react.'

  return (
    <img className='logo' src={logo} alt={alt} />
  )
}

export default Logo
