import * as React from 'react';
import './NTodo.scss';
import { Todo } from '@types';
import { NParagraph } from '@components/notion';

interface NTodoProps {
  todo: Todo;
  blockId: string;
}

export default function NTodo({ todo, blockId }: NTodoProps) {
  return (
    <>
      {todo && (
        <label className="block-todo" htmlFor={blockId}>
          <input id={blockId} type="checkbox" checked={todo.checked} onChange={() => {}} />
          <NParagraph paragraph={todo} />
        </label>
      )}
    </>
  );
}
