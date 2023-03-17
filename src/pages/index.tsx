import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import '../css/global.scss'

const IndexPage: React.FC<PageProps> = () => {
  return <main>Hello, stranger.</main>
}

export default IndexPage

export const Head: HeadFC = () => <title>Home</title>
