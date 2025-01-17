import { TTodosState } from '../types/TTodosState';
import { ITodoItem } from '../interfaces/ITodoItem';
import { TTodosFilter } from '../types/TTodosFilter';

export const getTodosAll = (todosAll: ITodoItem[]): number => {
  if (!todosAll || todosAll.length === 0) {
    return 0;
  }
  return todosAll.length;
};

export const getTodosCompleted = (todosAll: ITodoItem[]): number => {
  if (!todosAll || todosAll.length === 0) {
    return 0;
  }
  return todosAll.reduce((completed, todo) => {
    return completed + (todo.isCompleted ? 1 : 0);
  }, 0);
};

export const getTodosActive = (todosAll: ITodoItem[]): number => {
  if (!todosAll || todosAll.length === 0) {
    return 0;
  }
  return todosAll.reduce((active, todo) => {
    return active + (todo.isCompleted ? 0 : 1);
  }, 0);
};

export const getTodosState = (todosAll: ITodoItem[]): TTodosState => {
  const all = getTodosAll(todosAll);
  const completed = getTodosCompleted(todosAll);
  const active = getTodosActive(todosAll);
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

export const getTodosFiltered = (
  todosAll: ITodoItem[],
  todosFilter: TTodosFilter,
): ITodoItem[] => {
  switch (todosFilter) {
    case 'all':
      return todosAll;
    case 'active':
      return todosAll.filter((t) => !t.isCompleted);
    case 'completed':
      return todosAll.filter((t) => t.isCompleted);
  }
};
