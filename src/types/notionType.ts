// 노션 DB 컬럼 목록
export interface Properties {
  idx: Property
  title: Property
  url: Property
  remark: Property
  category: Property
  created_date: Property
  edited_date: Property
  series: Property
  tag: Property
}

// 노션 DB 테이블 컬럼 속성
export interface Property {
  id: string
  type: 'title' | 'multi_select' | 'rich_text' | 'date' | 'select' | 'number'
  title?: TextItem
  multi_select?: Select[]
  rich_text?: string
  date: PropDate
  select: Select
  number: number
}

export interface WorkBy {
  object: string
  id: string
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
