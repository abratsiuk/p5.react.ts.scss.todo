import { memo } from 'react';
import './TodosToggle.scss';
import { useDataContext } from '../../hooks/useDataContext';
import { useActionContext } from '../../hooks/useActionContext';
import { getTodosState } from '../../helpers';

export const TodosToggle = memo(() => {
  const { todosAll } = useDataContext();
  const { toggleAllTodosCompleted } = useActionContext();

  const todosState = getTodosState(todosAll);

  const modifier =
    todosState === 'empty'
      ? 'hide'
      : todosState === 'allCompleted'
        ? 'toAllActive'
        : 'toAllCompleted';
  return (
    <div className="TodosToggle">
      <button
        className={`TodosToggle__toggle TodosToggle__toggle_${modifier}`}
        onClick={() => {
          if (todosState === 'empty') return;
          if (todosState === 'allActive') toggleAllTodosCompleted(true);
          if (todosState === 'anyActive-anyCompleted')
            toggleAllTodosCompleted(true);
          if (todosState === 'allCompleted') toggleAllTodosCompleted(false);
        }}
      />
    </div>
  );
});

TodosToggle.displayName = 'TodosToggle';
