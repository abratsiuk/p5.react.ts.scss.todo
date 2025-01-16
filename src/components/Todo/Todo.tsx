import React, { useState, memo, useCallback } from 'react';
import { ITodoItem } from '../../interfaces/ITodoItem';
import { TodoShow } from '../TodoShow';
import { TodoEdit } from '../TodoEdit';
import './Todo.scss';
import { useActionContext } from '../../hooks/useActionContext';

export const Todo: React.FC<ITodoItem> = memo(({ id, text, isCompleted }) => {
  const { changeTodoText } = useActionContext();
  const [isEditing, setIsEditing] = useState(false);

  const onConfirmEditing = useCallback(
    (text: string) => {
      changeTodoText(id, text);
      setIsEditing(false);
    },
    [id, changeTodoText],
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
        <TodoShow key={id} id={id} text={text} isCompleted={isCompleted} />
      )}
    </div>
  );
});

Todo.displayName = 'Todo';
