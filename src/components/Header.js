import { useContext } from 'react'
import themeContext from '../context/ThemeContext'

function Header() {
  const { theme, toggleTheme } = useContext(themeContext)

  return (
    <header>
      <h1>TODO</h1>
      <div className='theme-toggle-container' onClick={toggleTheme}>
        <img
          src={
            theme === 'dark-theme'
              ? './images/icon-sun.svg'
              : './images/icon-moon.svg'
          }
          alt='light-theme-icon'
        />
      </div>
    </header>
  )
}

export default Header
