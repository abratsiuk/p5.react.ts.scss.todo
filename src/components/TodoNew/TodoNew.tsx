import React, { useState } from 'react';
import { ITodoNewProps } from './ITodoNewProps';
import './TodoNew.scss';

export const TodoNew: React.FC<ITodoNewProps> = ({ onAddTodo }) => {
  const [value, setValue] = useState('');

  return (
    <div className="TodoNew">
      <input
        className="TodoNew__text"
        type="text"
        name="TodoNew"
        id="TodoNew"
        placeholder="What needs to be done?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(event) => {
          if (event.code === 'Enter') {
            if (value.trim()) onAddTodo(value.trim());
            setValue('');
          }
          if (event.code === 'Escape') {
            setValue('');
          }
        }}
      />
    </div>
  );
};
