import React, { useState } from 'react';
import { TodoEditProps } from './TodoEditProps';
import './TodoEdit.scss';

export const TodoEdit: React.FC<TodoEditProps> = ({
  text,
  onEditTodo,
  onCancelEditing,
}) => {
  const [value, setValue] = useState<string>(text);

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
          if (event.code === 'Esc') {
            onCancelEditing();
          }
        }}
        onBlur={onCancelEditing}
      />
      <button
        className="TodoEdit__button TodoEdit__button_ok"
        onClick={() => onEditTodo(value)}
      >
        Сохранить
      </button>
      <button
        className="TodoEdit__button TodoEdit__button_cancel"
        onClick={onCancelEditing}
      >
        Отменить
      </button>
    </div>
  );
};
