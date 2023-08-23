const STORAGE_CONFIG_KEY = 'WEEZIP_CONFIG'

export const setConfig = (key = '', value = '') => {
  const storage = localStorage.getItem(STORAGE_CONFIG_KEY)
  const config = JSON.parse(storage || '{}')
  if (key) {
    config[key] = value
  }
  localStorage.setItem(STORAGE_CONFIG_KEY, JSON.stringify(config))
}

export const getConfig = (key = ''): string => {
  const storage = localStorage.getItem(STORAGE_CONFIG_KEY)
  const config = JSON.parse(storage || '{}')
  return config[key] || ''
}
