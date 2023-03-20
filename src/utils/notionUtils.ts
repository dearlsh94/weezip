import { NOTION_GUMCHIDAN_DB_ID } from '../constants/key'
import { INotionNode } from '../types/notionTypes'

export const getGumchidanNode = (nodes: INotionNode[]) => {
  return nodes.find(n => n.id === NOTION_GUMCHIDAN_DB_ID)
}
