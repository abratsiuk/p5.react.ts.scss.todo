import { TTodosState } from '../types/TTodosState';
import { ITodoItem } from '../interfaces/ITodoItem';

export const getTodosAll = (todos: ITodoItem[]): number => {
  if (!todos || todos.length === 0) {
    return 0;
  }
  return todos.length;
};

export const getTodosCompleted = (todos: ITodoItem[]): number => {
  if (!todos || todos.length === 0) {
    return 0;
  }
  return todos.reduce((completed, todo) => {
    return completed + (todo.isCompleted ? 1 : 0);
  }, 0);
};

export const getTodosActive = (todos: ITodoItem[]): number => {
  if (!todos || todos.length === 0) {
    return 0;
  }
  return todos.reduce((active, todo) => {
    return active + (todo.isCompleted ? 0 : 1);
  }, 0);
};

export const getTodosState = (todos: ITodoItem[]): TTodosState => {
  const all = getTodosAll(todos);
  const completed = getTodosCompleted(todos);
  const active = getTodosActive(todos);
  if (all == 0) {
    return 'empty';
  } else if (active > 0 && completed == 0) {
    return 'allActive';
  } else if (active > 0 && completed > 0) {
    return 'anyActive-anyCompleted';
  } else if (active == 0 && completed > 0) {
    return 'allCompleted';
  }
  return 'empty';
};
