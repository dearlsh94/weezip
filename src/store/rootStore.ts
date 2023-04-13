import React from 'react'
import { PageProps } from 'gatsby'
import { INotionContext } from '../types'

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
