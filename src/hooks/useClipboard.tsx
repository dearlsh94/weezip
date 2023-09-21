import { useState } from 'react'

const useClipboard = () => {
  const [copied, setCopied] = useState<boolean>(false)

  const copyToClipboard = async (textToCopy: string) => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href)
      } else {
        const textField = document.createElement('textarea')
        textField.innerText = textToCopy
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
      }
      setCopied(true)
    } catch (error) {
      setCopied(false)
    }
  }

  return { copied, copyToClipboard }
}

export default useClipboard
