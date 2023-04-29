import * as React from 'react'
import '@scss/components.scss'
import { Todo } from '../../types'
import Paragraph from './Paragraph'

interface Props {
  todo: Todo
}

const MyTodo = ({ todo }: Props) => {
  return (
    <React.Fragment>
      {todo && (
        <div className="block-todo">
          <input type="checkbox" checked={todo.checked} onChange={() => {}} />
          <label>
            <Paragraph paragraph={todo} />
          </label>
        </div>
      )}
    </React.Fragment>
  )
}

export default MyTodo
