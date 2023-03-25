import React from 'react'
import { NotionNode } from '../types'

export const NotionContext = React.createContext<NotionNode[]>([])
