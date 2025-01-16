import { memo } from 'react';
import './Tool.scss';
import { useDataContext } from '../../hooks/useDataContext';
import { useActionContext } from '../../hooks/useActionContext';

export const Tool = memo(() => {
  const { todosKindsNumber, todosState, todosFilter } = useDataContext();
  const {
    handleFilterAll,
    handleFilterActive,
    handleFilterCompleted,
    clearCompleted,
  } = useActionContext();

  const todosLeft = todosKindsNumber.active;
  const toolClassName = [
    'Tool',
    todosState === 'empty' ? 'Tool_hide' : '',
    todosLeft > 0 && todosLeft <= 5 ? 'Tool_' + todosLeft : '',
    todosLeft > 5 ? 'Tool_more5' : '',
  ].join(' ');

  const clearClassName = [
    'Tool__clearCompleted',
    todosState === 'empty' || todosState === 'allActive'
      ? 'Tool__clearCompleted_noCompleted'
      : '',
  ].join(' ');

  return (
    <div className={toolClassName}>
      <div className="Tool__info">{todosLeft} items left</div>

      <div
        className={`Tool__all ${todosFilter === 'all' ? 'Tool__all_selected' : ''}`}
        onClick={handleFilterAll}
      >
        All
      </div>

      <div
        className={`Tool__active ${todosFilter === 'active' ? 'Tool__active_selected' : ''}`}
        onClick={handleFilterActive}
      >
        Active
      </div>

      <div
        className={`Tool__completed ${todosFilter === 'completed' ? 'Tool__completed_selected' : ''}`}
        onClick={handleFilterCompleted}
      >
        Completed
      </div>

      <div className={clearClassName} onClick={clearCompleted}>
        Clear completed
      </div>
    </div>
  );
});

Tool.displayName = 'Tool';
