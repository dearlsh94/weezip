import { useEffect, useState } from 'react'
import { getConfig, setConfig } from '@utils/configUtils'
import { CONFIG_THEME_KEY } from '@src/constants'

enum THEME_MODE {
  LIGHT = 'light',
  DARK = 'dark',
}

const useTheme = () => {
  const [theme, setTheme] = useState<THEME_MODE>()

  useEffect(() => {
    const configTheme = getConfig(CONFIG_THEME_KEY)
    if (configTheme) {
      if (configTheme === THEME_MODE.DARK) {
        setDark()
      } else {
        setLight()
      }
    } else {
      const preferDark = window.matchMedia('(prefers-color-scheme: dark')
      if (preferDark) {
        setDark()
      } else {
        setLight()
      }
    }
  }, [])

  const setLight = () => {
    document.documentElement.setAttribute(CONFIG_THEME_KEY, THEME_MODE.LIGHT)
    setConfig(CONFIG_THEME_KEY, THEME_MODE.LIGHT)
    setTheme(THEME_MODE.LIGHT)
  }

  const setDark = () => {
    document.documentElement.setAttribute(CONFIG_THEME_KEY, THEME_MODE.DARK)
    setConfig(CONFIG_THEME_KEY, THEME_MODE.DARK)
    setTheme(THEME_MODE.DARK)
  }

  return { theme, setLight, setDark }
}

export default useTheme
