import React from 'react';
import { ToolProps } from './ToolProps';
import './Tool.scss';

export const Tool: React.FC<ToolProps> = ({
  todosLeft,
  todosState,
  todosFilter,
  onAll,
  onActive,
  onCompleted,
  onClearCompleted,
}) => {
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
      <span className="Tool__info">{todosLeft} items left</span>

      <span
        className={`Tool__all ${todosFilter === 'all' ? 'Tool__all_selected' : ''}`}
        onClick={onAll}
      >
        All
      </span>

      <span
        className={`Tool__active ${todosFilter === 'active' ? 'Tool__active_selected' : ''}`}
        onClick={onActive}
      >
        Active
      </span>

      <span
        className={`Tool__completed ${todosFilter === 'completed' ? 'Tool__completed_selected' : ''}`}
        onClick={onCompleted}
      >
        Completed
      </span>

      <span className={clearClassName} onClick={onClearCompleted}>
        Clear completed
      </span>
    </div>
  );
};
