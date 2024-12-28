import React from 'react';
import { TodoProps } from './TodoProps';
import './Todo.scss';

export const Todo: React.FC<TodoProps> = ({ todo }) => {
  return (
    <div className="Todo">
      <input type="checkbox" name="isCompleted" id="isCompleted" />
      <label htmlFor="isCompleted">{todo.text}</label>
    </div>
  );
};
