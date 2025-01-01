import React, { useState } from 'react';
import { ITodoProps } from './ITodoProps';
import { TodoShow } from '../TodoShow';
import { TodoEdit } from '../TodoEdit';
import './Todo.scss';

export const Todo: React.FC<ITodoProps> = ({
  todo,
  onDeleteTodo,
  onToggleCompleted,
  onChangeTodoText,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const onEditTodo = (text: string) => {
    onChangeTodoText(todo.id, text);
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
          key={todo.id}
          text={todo.text}
          onEditTodo={onEditTodo}
          onCancelEditing={onCancelEditing}
        />
      ) : (
        <TodoShow
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onToggleCompleted={onToggleCompleted}
        />
      )}
    </div>
  );
};
