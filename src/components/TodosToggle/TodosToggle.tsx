import React, { memo } from 'react';
import { ITodosToggleProps } from './ITodosToggleProps';
import './TodosToggle.scss';

export const TodosToggle: React.FC<ITodosToggleProps> = memo(
  ({ todosState, onToggleCompletedAll }) => {
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
            if (todosState === 'allActive') onToggleCompletedAll(true);
            if (todosState === 'anyActive-anyCompleted')
              onToggleCompletedAll(true);
            if (todosState === 'allCompleted') onToggleCompletedAll(false);
          }}
        />
      </div>
    );
  },
);
