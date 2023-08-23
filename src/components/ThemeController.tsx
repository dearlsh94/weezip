import * as React from 'react'
import IconLightMode from './icon/IconLightTheme'
import IconDarkTheme from './icon/IconDarkTheme'
import { getConfig, setConfig } from '@utils/configUtils'

enum THEME_MODE {
  LIGHT = 'light',
  DARK = 'dark',
}
const CONFIG_KEY = 'weezip-theme'

const StyleMode = () => {
  const [theme, setTheme] = React.useState<THEME_MODE>()
  const setLightMode = () => {
    document.documentElement.setAttribute(CONFIG_KEY, THEME_MODE.LIGHT)
    setConfig(CONFIG_KEY, THEME_MODE.LIGHT)
    setTheme(THEME_MODE.LIGHT)
  }

  const setDarkMode = () => {
    document.documentElement.setAttribute(CONFIG_KEY, THEME_MODE.DARK)
    setConfig(CONFIG_KEY, THEME_MODE.DARK)
    setTheme(THEME_MODE.DARK)
  }
  React.useEffect(() => {
    const theme = getConfig(CONFIG_KEY)
    console.log(theme)
    if (theme === THEME_MODE.DARK) {
      setDarkMode()
      setTheme(THEME_MODE.DARK)
    } else {
      setLightMode()
      setTheme(THEME_MODE.LIGHT)
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

  return (
    <>
      {theme === 'light' ? <IconLightMode handleClick={handleChange} /> : <IconDarkTheme handleClick={handleChange} />}
    </>
  )
}

export default StyleMode
