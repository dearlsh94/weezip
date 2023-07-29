import { WorkBy, Properties, Heading, TextBlock, Todo, Callout, Bookmark, Select, Code, Image } from './componentType'

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
  public_url: string
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
  callout?: Callout
  toggle?: TextBlock
  bookmark?: Bookmark
  code?: Code
  image?: Image
  divider?: {}
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
  CALLOUT = 'callout',
  TOGGLE = 'toggle',
  BOOKMARK = 'bookmark',
  CODE = 'code',
  IMAGE = 'image',
  DIVIDER = 'divider',
}

export interface ContentValue {
  idx: number
  remark: string
  cover: string
  lastEditedTime: string
  createdTime: string
  notionUrl: string
  category?: Select
  tag?: Select[]
  series?: Select
}
