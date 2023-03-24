import { WorkBy, Properties, Heading, TextBlock, NumberedListItem, BulletedListItem } from './componentType'

export interface PageContent {
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
}

export interface Parent {
  type: string
  database_id: string
}

export interface Children {
  object: string
  id: string
  parent: Parent
  created_time: string
  last_edited_time: string
  created_by: WorkBy
  last_edited_by: WorkBy
  has_children: boolean
  archived: boolean
  children: Children[]
  // NOTE Block Types
  type: 'paragraph' | 'bulleted_list_item' | 'numbered_list_item'
  paragraph?: TextBlock
  bulleted_list_item: TextBlock
  numbered_list_item: NumberedListItem
  heading_1?: Heading
}
