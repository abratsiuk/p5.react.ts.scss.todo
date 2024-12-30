import React from 'react';
import { ToolProps } from './ToolProps';
import './Tool.scss';

export const Tool: React.FC<ToolProps> = ({
  todosLeft,
  TodosToggle,
  onAll,
  onActive,
  onCompleted,
  onClearCompleted,
}) => {
  return (
    <div className="Tool">
      <div className="Tool__info">{todosLeft} items left!</div>
      <div className="Tool__all">
        <button className="Button" onClick={onAll}>
          All
        </button>
      </div>
      <div className="Tool__active">
        <button className="Button" onClick={onActive}>
          Active
        </button>
      </div>
      <div className="Tool__completed">
        <button className="Button" onClick={onCompleted}>
          Completed
        </button>
      </div>
      <div className="Tool__clearCompleted">
        <button className="Button" onClick={onClearCompleted}>
          Clear completed
        </button>
      </div>
    </div>
  );
};
