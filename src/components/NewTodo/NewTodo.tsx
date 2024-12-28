import React from 'react';
import { NewTodoProps } from './NewTodoProps';
import './NewTodo.scss';

export const NewTodo: React.FC<NewTodoProps> = ({ onAddTodo }) => {
  return (
    <div className="NewTodo">
      <input type="text" name="NewTodo" id="NewTodo" />
      <button onClick={() => onAddTodo('test' + Math.random())}>
        Добавить
      </button>
    </div>
  );
};
