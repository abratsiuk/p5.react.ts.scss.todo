import { ITodoItem } from '../interfaces/ITodoItem';
import { TTodosFilter } from '../types/TTodosFilter';

export interface ITodosDataContext {
  filtered: ITodoItem[];
  todosFilter: TTodosFilter;
}
