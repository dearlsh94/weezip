import { throttle } from '@utils/commonUtils'
import { useEffect, useState } from 'react'

const useScroll = () => {
  const [scrollY, setScrollY] = useState(0)

  const handleScroll = throttle(() => {
    setScrollY(window.scrollY)
  }, 30)

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return {
    scrollY,
  }
}

export default useScroll
