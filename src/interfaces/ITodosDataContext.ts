import { ITodoItem } from '../interfaces/ITodoItem';
import { TTodosFilter } from '../types/TTodosFilter';

export interface ITodosDataContext {
  todosAll: ITodoItem[];
  todosFilter: TTodosFilter;
}
