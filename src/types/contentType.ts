import { WorkBy, Properties, Heading, TextBlock, Todo } from './componentType'

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
  bulleted_list_item?: TextBlock
  numbered_list_item?: TextBlock
  heading_1?: Heading
  heading_2?: Heading
  heading_3?: Heading
  quote?: TextBlock
  to_do?: Todo
}

export interface Parent {
  type: string
  database_id: string
}

// NOTE Block Types
export enum BlockType {
  PARAGRAPH = 'paragraph',
  HEADING_1 = 'heading_1',
  HEADING_2 = 'heading_2',
  HEADING_3 = 'heading_3',
  QUOTE = 'quote',
  BULLETED_LIST_ITEM = 'bulleted_list_item',
  NUMBERED_LIST_ITEM = 'numbered_list_item',
  TODO = 'to_do',
}
