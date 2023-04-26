import { NotionNode } from './nodeTypes'

export interface INotionContext {
  nodes: NotionNode[]
  tags?: Map<string, NotionNode[]>
}
