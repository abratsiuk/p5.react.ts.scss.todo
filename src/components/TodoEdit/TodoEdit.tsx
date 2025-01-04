import React, { useState, memo } from 'react';
import { ITodoEditProps } from './ITodoEditProps';
import './TodoEdit.scss';

export const TodoEdit: React.FC<ITodoEditProps> = memo(
  ({ text, onConfirmEditing, onCancelEditing }) => {
    const [value, setValue] = useState(text);

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
              if (value.trim() === '') {
                onCancelEditing();
              } else if (value.trim() !== text) {
                onConfirmEditing(value);
              } else {
                onCancelEditing();
              }
            } else if (event.code === 'Escape') {
              onCancelEditing();
            }
          }}
          onBlur={onCancelEditing}
          autoFocus
        />
      </div>
    );
  },
);

TodoEdit.displayName = 'TodoEdit';
