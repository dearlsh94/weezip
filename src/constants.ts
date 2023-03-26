export const isDebug = false
export const urlMap: Map<string, string> = new Map([
  ['/', 'Home'],
  ['/intro', 'Intro'],
])

export const gnbLinkes = [
  { url: '/', title: 'Home' },
  { url: '/intro', title: 'Intro' },
  { url: '/list?category=write', title: 'Write' },
  { url: '/list?category=explain', title: 'Explain' },
  { url: '/list?category=edit', title: 'Edit' },
  { url: '/list?category=zip', title: 'Zip' },
]
