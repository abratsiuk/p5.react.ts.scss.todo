import React, { useState, useRef, useEffect } from 'react';
import { ITodoEditProps } from './ITodoEditProps';
import './TodoEdit.scss';

export const TodoEdit: React.FC<ITodoEditProps> = ({
  text,
  onEditTodo,
  onCancelEditing,
}) => {
  const [value, setValue] = useState<string>(text);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="TodoEdit">
      <input
        className="TodoEdit__text"
        type="text"
        name="TodoEdit"
        id="TodoEdit"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyDown={(event) => {
          if (event.code === 'Enter') {
            onEditTodo(value);
          }
          if (event.code === 'Escape') {
            onCancelEditing();
          }
        }}
        onBlur={onCancelEditing}
        ref={inputRef}
      />
    </div>
  );
};
