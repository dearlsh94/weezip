import React from 'react'
import { Children, NotionNode } from '../types'
import { WindowLocation } from '@reach/router' // These come from `@types/reach__router`
import { PageProps } from 'gatsby'

export interface INotionContext {
  nodes: NotionNode[]
  categories: NotionCategories
}
export interface NotionCategories {
  [key: string]: Children[]
  write: Children[]
  explain: Children[]
  edit: Children[]
  zip: Children[]
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
