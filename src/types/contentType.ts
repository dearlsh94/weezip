import { WorkBy, Properties, Heading, TextBlock, NumberedListItem, BulletedListItem } from './componentType'

export interface Children {
  object: 'block'
  id: string
  created_time: string
  last_edited_time: string
  created_by: WorkBy
  last_edited_by: WorkBy
  cover: any
  icon: any
  parent: Parent
  archived: boolean
  properties: Properties
  url: string
  children: Children[]
  has_children: boolean
  type: BlockType
  paragraph?: TextBlock
  bulleted_list_item: TextBlock
  numbered_list_item: NumberedListItem
  heading_1?: Heading
}

export interface Parent {
  type: string
  database_id: string
}

// NOTE Block Types
export enum BlockType {
  PARAGRAPH = 'paragraph',
  BULLETED_LIST_ITEM = 'bulleted_list_item',
  NUMBERED_LIST_ITEM = 'numbered_list_item',
}
