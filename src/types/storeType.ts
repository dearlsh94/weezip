import { NotionNode } from './nodeTypes'

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
