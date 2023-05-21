type ThrottleFn = (...args: any[]) => void

export const throttle = (fn: ThrottleFn, delay = 10): ThrottleFn => {
  let lastExecTime = 0

  return (...args: any[]) => {
    const now = Date.now()

    if (now - lastExecTime >= delay) {
      fn(...args)
      lastExecTime = now
    }
  }
}

type DebounceFn = (...args: any[]) => void

export const debounce = (fn: DebounceFn, delay = 10): DebounceFn => {
  let timerId: number | undefined

  return (...args: any[]) => {
    if (timerId) {
      clearTimeout(timerId)
    }

    timerId = setTimeout(() => {
      fn(...args)
    }, delay) as any
  }
}
