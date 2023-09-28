import { useEffect, useState } from 'react'
import { CONFIG_THEME_KEY } from '@src/constants'
import { useLocalStorage } from './useLocalStorage'

const themes = {
  LIGHT: 'light',
  DARK: 'dark',
}
type ThemesType = (typeof themes)[keyof typeof themes]

const useTheme = () => {
  const { setConfig, getConfig } = useLocalStorage()
  const [theme, setTheme] = useState<ThemesType>()

  useEffect(() => {
    const configTheme = getConfig(CONFIG_THEME_KEY)
    if (configTheme) {
      if (configTheme === themes.DARK) {
        setDark()
      } else {
        setLight()
      }
    } else {
      const preferDark = window.matchMedia('(prefers-color-scheme: dark')
      if (preferDark?.matches) {
        changeDark()
      } else {
        changeLight()
      }
    }
  }, [])

  const changeLight = () => {
    document.documentElement.setAttribute(CONFIG_THEME_KEY, themes.LIGHT)
    setTheme(themes.LIGHT)
  }
  const setLight = () => {
    changeLight()
    setConfig(CONFIG_THEME_KEY, themes.LIGHT)
  }

  const changeDark = () => {
    document.documentElement.setAttribute(CONFIG_THEME_KEY, themes.DARK)
    setTheme(themes.DARK)
  }
  const setDark = () => {
    changeDark()
    setConfig(CONFIG_THEME_KEY, themes.DARK)
  }

  return { theme, setLight, setDark }
}

export default useTheme
