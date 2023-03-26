export const isDebug = false
export const urlMap: Map<string, string> = new Map([
  ['/', 'Home'],
  ['/intro', 'Intro'],
])

export const gnbLinkes = [
  { url: '/', title: 'Home' },
  { url: '/intro', title: 'Intro' },
  { url: '/list?cateogry=write', title: 'Write' },
  { url: '/list?cateogry=explain', title: 'Explain' },
  { url: '/list?cateogry=edit', title: 'Edit' },
  { url: '/list?cateogry=zip', title: 'Zip' },
]
