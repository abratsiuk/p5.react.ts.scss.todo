import React from 'react';
import { ITodosToggleProps } from './ITodosToggleProps';
import './TodosToggle.scss';

export const TodosToggle: React.FC<ITodosToggleProps> = ({
  todosState,
  onToggleCompletedAll,
}) => {
  return (
    <div className="TodosToggle">
      <button
        className={`TodosToggle__toggle TodosToggle__toggle_${todosState}`}
        onClick={() => {
          if (todosState === 'empty') return;
          onToggleCompletedAll(todosState === 'anyActive');
        }}
      />
    </div>
  );
};
