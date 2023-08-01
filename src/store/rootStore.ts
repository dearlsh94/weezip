import React from 'react'
import { PageProps } from 'gatsby'
import { INotionContext } from '@types'

export const NotionContext = React.createContext<INotionContext>({
  nodes: [],
  postTags: [],
})

export const PageContext = React.createContext<PageProps | null>(null)
