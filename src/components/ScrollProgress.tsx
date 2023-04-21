import * as React from 'react'
import { useEffect, useState } from 'react'
import { throttle } from '../utils/commonUtils'
import '../scss/components.scss'

interface Props {}

const ScrollProgress = ({}: Props) => {
  const [status, setStatus] = useState('')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 100) {
        setStatus('visible')
      } else {
        setStatus('')
      }

      let windowScroll = document?.body.scrollTop || document?.documentElement.scrollTop
      let height = document?.documentElement.scrollHeight - document?.documentElement.clientHeight
      setProgress((windowScroll / height) * 100)
    }
    const throttledScrollHandler = throttle(scrollHandler, 3)

    window.addEventListener('scroll', throttledScrollHandler)
    return () => {
      window.removeEventListener('scroll', throttledScrollHandler)
    }
  }, [])

  return (
    <React.Fragment>
      <div className={`scroll-progress-container ${status}`}>
        <div
          className="scroll-progress"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </React.Fragment>
  )
}

export default ScrollProgress
