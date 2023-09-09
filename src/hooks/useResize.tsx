import { throttle } from '@utils/commonUtils'
import { useEffect, useState } from 'react'

const useResize = () => {
  const [resizedInnerWidth, setResizedInnerWidth] = useState(window.innerWidth)
  const [resizedInnerHeight, setResizedInnerHeight] = useState(window.innerHeight)

  const handleResize = throttle(() => {
    setResizedInnerWidth(window.innerWidth)
    setResizedInnerHeight(window.innerHeight)
  }, 30)

  useEffect(() => {
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
