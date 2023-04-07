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
