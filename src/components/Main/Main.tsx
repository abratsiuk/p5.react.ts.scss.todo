import { TodoNew } from '../TodoNew';
import { Todos } from '../Todos';
import { Tool } from '../Tool';
import './Main.scss';
import { TodosToggle } from '../TodosToggle';

export const Main = () => {
  return (
    <div className="Main">
      <TodosToggle />
      <TodoNew />
      <Todos />
      <Tool />
    </div>
  );
};
