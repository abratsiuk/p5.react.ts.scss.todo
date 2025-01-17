import { useState, memo } from 'react';
import './TodoNew.scss';
import { useActionContext } from '../../hooks/useActionContext';

export const TodoNew = memo(() => {
  const { createTodo } = useActionContext();
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
            if (value.trim()) createTodo(value.trim());
            setValue('');
          }
          if (event.code === 'Escape') {
            setValue('');
          }
        }}
      />
    </div>
  );
});

TodoNew.displayName = 'TodoNew';
