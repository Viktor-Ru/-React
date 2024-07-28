import './Button.css'

function Button({ children, click, isActive}) {

  return (
    <button className={isActive ? 'button button--active' : 'button'} onClick={click}>{children}</button>
  )
}

export default Button
