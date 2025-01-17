import { memo } from 'react';
import { Todo } from '../Todo';
import { useDataContext } from '../../hooks/useDataContext';
import { getTodosFiltered } from '../../helpers';

export const Todos = memo(() => {
  const { todosAll, todosFilter } = useDataContext();
  const filtered = getTodosFiltered(todosAll, todosFilter);

  return (
    <div className="Todos">
      {filtered.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  );
});

Todos.displayName = 'Todos';
