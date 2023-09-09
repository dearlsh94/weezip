import { throttle } from '@utils/commonUtils'
import { useEffect, useState } from 'react'

const useResize = () => {
  const [resizedInnerWidth, setResizedInnerWidth] = useState(0)
  const [resizedInnerHeight, setResizedInnerHeight] = useState(0)

  const handleResize = throttle(() => {
    setResizedInnerWidth(window.innerWidth)
    setResizedInnerHeight(window.innerHeight)
  }, 30)

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return {
    resizedInnerWidth,
    resizedInnerHeight,
  }
}

export default useResize
