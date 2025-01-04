import React, { useState, memo, useCallback } from 'react';
import { ITodoProps } from './ITodoProps';
import { TodoShow } from '../TodoShow';
import { TodoEdit } from '../TodoEdit';
import './Todo.scss';

export const Todo: React.FC<ITodoProps> = memo(
  ({
    id,
    text,
    isCompleted,
    onDeleteTodo,
    onToggleCompleted,
    onChangeTodoText,
  }) => {
    const [isEditing, setIsEditing] = useState(false);

    const onConfirmEditing = useCallback(
      (text: string) => {
        onChangeTodoText(id, text);
        setIsEditing(false);
      },
      [id, onChangeTodoText],
    );

    const onCancelEditing = useCallback(() => {
      setIsEditing(false);
    }, []);

    return (
      <div
        className="Todo"
        onDoubleClick={() => setIsEditing(!isEditing)}
        onBlur={onCancelEditing}
      >
        {isEditing ? (
          <TodoEdit
            key={id}
            text={text}
            onConfirmEditing={onConfirmEditing}
            onCancelEditing={onCancelEditing}
          />
        ) : (
          <TodoShow
            key={id}
            id={id}
            text={text}
            isCompleted={isCompleted}
            onDeleteTodo={onDeleteTodo}
            onToggleCompleted={onToggleCompleted}
          />
        )}
      </div>
    );
  },
);

Todo.displayName = 'Todo';
