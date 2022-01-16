import { createContext, useState, useEffect } from 'react'

const themeContext = createContext()

const getPageTheme = () => {
  let pageTheme = localStorage.getItem('page-theme')
  if (!pageTheme) return 'dark-theme'
  else {
    if (document.body.classList.value === 'dark-theme') {
      document.body.classList.remove('dark-theme')
    } else {
      document.body.classList.remove('light-theme')
    }
    document.body.classList.add(pageTheme)
    return pageTheme
  }
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getPageTheme())

  useEffect(() => {
    localStorage.setItem('page-theme', theme)
    if (document.body.classList.value === 'dark-theme') {
      document.body.classList.remove('dark-theme')
    } else {
      document.body.classList.remove('light-theme')
    }
    document.body.classList.add(theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === 'dark-theme' ? 'light-theme' : 'dark-theme'
    )
  }

  return (
    <themeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </themeContext.Provider>
  )
}

export default themeContext
