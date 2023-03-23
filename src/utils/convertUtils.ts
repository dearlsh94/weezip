export const checkNewLine = (text: string) => {
  return text.replaceAll('\n', '<br/>')
}

export const getHexByColor = (color: string, none?: string) => {
  switch (color) {
    case 'grey':
      return '#f6f6f6'
    case 'brown':
      return '#c9ac9f'
    case 'orange':
      return '#e6a15f'
    case 'yellow':
      return '#dbb271'
    case 'blue':
      return '#96bbd2'
    case 'pink':
      return '#cf72a2'
    case 'red':
      return '#D95D58'
    case 'purple':
      return '#9b6dc6'
    case 'black':
      return '#000'
    default:
      return none ? none : '#888'
  }
}
