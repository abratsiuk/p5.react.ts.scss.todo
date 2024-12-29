import React, { useState } from 'react';
import { NewTodoProps } from './NewTodoProps';
import './NewTodo.scss';

export const NewTodo: React.FC<NewTodoProps> = ({ onAddTodo }) => {
  const [value, setValue] = useState<string>('');

  return (
    <div className="NewTodo">
      <input
        className="NewTodo__text"
        type="text"
        name="NewTodo"
        id="NewTodo"
        placeholder="What needs to be done?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(event) => {
          if (event.code === 'Enter') {
            onAddTodo(value);
          }
          if (event.code === 'Esc') {
            setValue('');
          }
        }}
      />
      <button onClick={() => onAddTodo(value)}>Добавить</button>
    </div>
  );
};
