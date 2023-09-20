import * as React from 'react'
import IconLightTheme from './icon/IconLightTheme'
import IconDarkTheme from './icon/IconDarkTheme'
import useTheme from '@src/hooks/useTheme'

const ThemeController = () => {
  const { theme, setLight, setDark } = useTheme()

  return <>{theme === 'light' ? <IconLightTheme handleClick={setDark} /> : <IconDarkTheme handleClick={setLight} />}</>
}

export default ThemeController
