import * as React from 'react'
import IconLightTheme from './icon/IconLightTheme'
import IconDarkTheme from './icon/IconDarkTheme'

enum THEME_MODE {
  LIGHT = 'light',
  DARK = 'dark',
}
const THEME_KEY = 'weezip-theme'

const StyleMode = () => {
  const [theme, setTheme] = React.useState<THEME_MODE>(THEME_MODE.LIGHT)

  React.useEffect(() => {
    setLightMode()
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
    document.documentElement.setAttribute(THEME_KEY, THEME_MODE.LIGHT)
    setTheme(THEME_MODE.LIGHT)
  }

  const setDarkMode = () => {
    document.documentElement.setAttribute(THEME_KEY, THEME_MODE.DARK)
    setTheme(THEME_MODE.DARK)
  }
  return (
    <>
      {theme === 'light' ? <IconLightTheme handleClick={handleChange} /> : <IconDarkTheme handleClick={handleChange} />}
    </>
  )
}

export default StyleMode
