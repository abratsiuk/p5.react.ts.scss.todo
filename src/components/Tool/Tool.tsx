import React, { memo } from 'react';
import { IToolProps } from './IToolProps';
import './Tool.scss';

export const Tool: React.FC<IToolProps> = memo(
  ({
    todosLeft,
    todosState,
    todosFilter,
    onAll,
    onActive,
    onCompleted,
    onClearCompleted,
  }) => {
    const handleFilterAll = useCallback(() => setTodosFilter('all'), []);
    const handleFilterActive = useCallback(() => setTodosFilter('active'), []);
    const handleFilterCompleted = useCallback(
      () => setTodosFilter('completed'),
      [],
    );
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
          onClick={onAll}
        >
          All
        </div>

        <div
          className={`Tool__active ${todosFilter === 'active' ? 'Tool__active_selected' : ''}`}
          onClick={onActive}
        >
          Active
        </div>

        <div
          className={`Tool__completed ${todosFilter === 'completed' ? 'Tool__completed_selected' : ''}`}
          onClick={onCompleted}
        >
          Completed
        </div>

        <div className={clearClassName} onClick={onClearCompleted}>
          Clear completed
        </div>
      </div>
    );
  },
);
