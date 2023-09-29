import * as React from 'react';
import '@scss/notion.scss';
import { Todo } from '@types';
import { NParagraph } from '@components/notion';

interface NTodoProps {
  todo: Todo;
}

export default function NTodo({ todo }: NTodoProps) {
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
  );
}
