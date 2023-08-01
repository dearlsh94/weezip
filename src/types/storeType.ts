import { Select } from './componentType'
import { NotionNode } from './nodeTypes'

export interface INotionContext {
  nodes: NotionNode[]
  postTags?: Select[]
}
