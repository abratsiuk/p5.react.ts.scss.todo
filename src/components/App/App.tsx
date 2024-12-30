import './App.scss';
import { Main } from '../Main';

export const App = () => {
  return (
    <div className="App">
      <div className="App__header">todos</div>

      <Main />

      <div className="App__footer">
        <div className="App__instruction">
          <div>Double-click to edit a todo.</div>
          <div>
            The data is saved in localStorage, and you can edit a todo
            simultaneously across different browser tabs.
          </div>
        </div>
      </div>

      <div className="App__copying">© 2024 abratsiuk</div>
      <div className="App__thanks">
        I thank the TodoMVC team for their inspiring{' '}
        <a
          href="https://todomvc.com/examples/typescript-react/#/"
          target="_blank"
        >
          example
        </a>{' '}
        of interface and design mockup.
      </div>
    </div>
  );
};
