import './App.scss';
import { Main } from '../Main';

export const App = () => {
  return (
    <div className="App">
      <div className="App__header">todos</div>
      <Main />
      <div className="App__footer">
        <div>Double-click to edit a todo</div>
        <div>Created by abratsiuk</div>
        <div>The UI idea by TodoMVC</div>
      </div>
    </div>
  );
};
