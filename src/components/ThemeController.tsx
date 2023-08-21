import * as React from 'react'
// import '@scss/components.scss'
import IconLightTheme from './icon/IconLightTheme'
import IconDarkTheme from './icon/IconDarkTheme'

enum THEME_MODE {
  LIGHT = 'light',
  DARK = 'dark',
}
const STORAGE_KEY = 'weezip-theme'

const StyleMode = () => {
  const [theme, setTheme] = React.useState<THEME_MODE>(THEME_MODE.LIGHT)

  React.useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === THEME_MODE.DARK) {
      setTheme(THEME_MODE.DARK)
    }
  }, [])

  const handleChange = () => {
    if (theme === THEME_MODE.DARK) {
      setLightMode()
    } else if (theme === THEME_MODE.LIGHT) {
      setDarkMode()
    } else {
      setDarkMode()
    }
  }

  const setLightMode = () => {
    localStorage.setItem(STORAGE_KEY, THEME_MODE.LIGHT)
    document.documentElement.setAttribute(STORAGE_KEY, THEME_MODE.LIGHT)
    setTheme(THEME_MODE.LIGHT)
  }

  const setDarkMode = () => {
    localStorage.setItem(STORAGE_KEY, THEME_MODE.DARK)
    document.documentElement.setAttribute(STORAGE_KEY, THEME_MODE.DARK)
    setTheme(THEME_MODE.DARK)
  }
  return (
    <>
      {theme === 'light' ? <IconLightTheme handleClick={handleChange} /> : <IconDarkTheme handleClick={handleChange} />}
    </>
  )
}

export default StyleMode
