import { useState } from 'react'

const useClipboard = () => {
  const [copied, setCopied] = useState<boolean>(false)

  const copyToClipboard = (textToCopy: string): boolean => {
    try {
      const textField = document.createElement('textarea')
      textField.innerText = textToCopy
      document.body.appendChild(textField)
      textField.select()
      document.execCommand('copy')
      textField.remove()
      setCopied(true)
      return true
    } catch (error) {
      return false
    }
  }

  const reset = () => {
    setCopied(false)
  }

  return { copied, copyToClipboard, reset }
}

export default useClipboard
