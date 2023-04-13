export interface WorkBy {
  object: string
  id: string
}

// NOTE Notion Database Column
export interface Properties {
  title: Property
  url: Property
  remark: Property
  category: Property
  created_date: Property
  edited_date: Property
  series: Property
  tag: Property
}

// NOTE 노션 DB 테이블의 컬럼
export interface Property {
  id: string
  type: 'title' | 'multi_select' | 'rich_text' | 'date' | 'select'
  title?: TextItem // type === title
  rich_text?: string // type === rich_text
  multi_select?: Select[]
  date: PropDate
  select: Select
}

export interface Select {
  id: string
  name: string
  color: string
}

export interface TextItem {
  type: string
  text: Text
  annotations: Annotations
  plain_text: string
  href: any
}

export interface Annotations {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

export interface Url {
  id: string
  type: string
  rich_text: string
}

export interface Text {
  content: string
  link: any
}

export interface Heading {
  color: string
  is_toggleable: boolean
  text: TextItem[]
}

export interface TextBlock {
  color: string
  text: TextItem[]
}

export interface Todo extends TextBlock {
  checked: boolean
}

export interface CalloutIcon {
  emoji: string
  type: 'emoji'
}
export interface Callout extends TextBlock {
  icon: CalloutIcon
}

export interface Bookmark {
  caption: TextItem[]
  url: string
}

export interface Code {
  caption: TextItem[]
  language: string
  text: TextItem[]
}

export interface Image {
  caption: TextItem[]
  file: ImageFile
  type: 'file'
}

export interface ImageFile {
  expiry_time: string
  url: string
}

export interface PropDate {
  end: string
  start: string
  time_zone?: string
}

export interface HeaderIndex {
  tag: string
  text: string
}
