import React from 'react'
import { NotionNode } from '../types'
import { PageProps } from 'gatsby'

export interface INotionContext {
  nodes: NotionNode[]
  categories: NotionCategories
}
export interface NotionCategories {
  [key: string]: NotionNode[]
  write: NotionNode[]
  explain: NotionNode[]
  edit: NotionNode[]
  zip: NotionNode[]
}
export const NotionContext = React.createContext<INotionContext>({
  nodes: [],
  categories: {
    write: [],
    explain: [],
    edit: [],
    zip: [],
  },
})

export const PageContext = React.createContext<PageProps | null>(null)
