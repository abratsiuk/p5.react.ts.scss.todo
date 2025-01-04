import React, { useState, memo } from 'react';
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
    const onEditTodo = (text: string) => {
      onChangeTodoText(id, text);
      setIsEditing(false);
    };
    const onCancelEditing = () => {
      setIsEditing(false);
    };
    const onBlur = () => {
      if (isEditing) {
        setIsEditing(false);
      }
    };
    return (
      <div
        className="Todo"
        onDoubleClick={() => setIsEditing(!isEditing)}
        onBlur={onBlur}
      >
        {isEditing ? (
          <TodoEdit
            key={id}
            text={text}
            onEditTodo={onEditTodo}
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
