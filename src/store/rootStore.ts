import React from 'react'
import { Children, NotionNode } from '../types'
import { WindowLocation } from '@reach/router' // These come from `@types/reach__router`
import { PageProps } from 'gatsby'

export interface INotionContext {
  nodes: NotionNode[]
  categories: NotionCategories
}
export interface NotionCategories {
  writes: Children[]
  explains: Children[]
  edits: Children[]
  zips: Children[]
}
export const NotionContext = React.createContext<INotionContext>({
  nodes: [],
  categories: {
    writes: [],
    explains: [],
    edits: [],
    zips: [],
  },
})

export const PageContext = React.createContext<PageProps | null>(null)
