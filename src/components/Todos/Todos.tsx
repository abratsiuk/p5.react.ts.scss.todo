import { memo } from 'react';
import { Todo } from '../Todo';
import './Todos.scss';
import { useDataContext } from '../../hooks/useDataContext';

export const Todos = memo(() => {
  const { filtered } = useDataContext();

  return (
    <div className="Todos">
      {filtered.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  );
});

Todos.displayName = 'Todos';
