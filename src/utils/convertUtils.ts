export const convertNewLine = (text: string) => {
  return text.replaceAll('\n', '<br/>')
}

export const convertDatetimeFormat = (datetimeString: string, format = 'YYYY-MM-DD'): string => {
  const date = new Date(datetimeString)
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  return format === 'YYYY-MM-DD' ? `${year}-${month}-${day}` : ``
}
