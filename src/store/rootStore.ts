import React from 'react'
import { Children, NotionNode } from '../types'

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
