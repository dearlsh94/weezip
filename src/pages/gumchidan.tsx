import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'

export const Head: HeadFC = () => <title>Gumchidan</title>

const GumchidanPage: React.FC<PageProps> = () => {
  return <main>for gumchidan.</main>
}

export default GumchidanPage
