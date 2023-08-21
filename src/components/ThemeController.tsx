import * as React from 'react'
// import '@scss/components.scss'
import IconLightMode from './icon/IconLightTheme'
import IconDarkTheme from './icon/IconDarkTheme'

enum THEME_MODE {
  LIGHT = 'light',
  DARK = 'dark',
}
const STORAGE_KEY = 'weezip-theme'

const StyleMode = () => {
  const [theme, setTheme] = React.useState<THEME_MODE>()
  React.useEffect(() => {
    const theme = localStorage.getItem(STORAGE_KEY)
    if (theme === THEME_MODE.DARK) {
      setDarkMode()
      setTheme(THEME_MODE.DARK)
    } else {
      setLightMode()
      setTheme(THEME_MODE.LIGHT)
    }
  }, [])

  const setLightMode = () => {
    document.documentElement.setAttribute(STORAGE_KEY, THEME_MODE.LIGHT)
    localStorage.setItem(STORAGE_KEY, THEME_MODE.LIGHT)
    setTheme(THEME_MODE.LIGHT)
  }

  const setDarkMode = () => {
    document.documentElement.setAttribute(STORAGE_KEY, THEME_MODE.DARK)
    localStorage.setItem(STORAGE_KEY, THEME_MODE.DARK)
    setTheme(THEME_MODE.DARK)
  }

  const handleChange = () => {
    if (theme === THEME_MODE.DARK) {
      setLightMode()
    } else if (theme === THEME_MODE.LIGHT) {
      setDarkMode()
    } else {
      setDarkMode()
    }
  }

  return (
    <>
      {theme === 'light' ? <IconLightMode handleClick={handleChange} /> : <IconDarkTheme handleClick={handleChange} />}
    </>
  )
}

export default StyleMode
