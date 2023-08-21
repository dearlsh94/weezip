import * as React from 'react'
import '@scss/notion.scss'
import { Todo } from '@types'
import { NParagraph } from '@components/notion'

interface Props {
  todo: Todo
}

const NTodo = ({ todo }: Props) => {
  return (
    <>
      {todo && (
        <div className="block-todo">
          <input type="checkbox" checked={todo.checked} onChange={() => {}} />
          <label>
            <NParagraph paragraph={todo} />
          </label>
        </div>
      )}
    </>
  )
}

export default NTodo
