import './App.scss';
import { Header } from '../Header';
import { Main } from '../Main';
import { Footer } from '../Footer';
import { TodosProvider } from '../Context';

export const App = () => {
  return (
    <div className="App">
      <TodosProvider>
        <Header />
        <Main />
        <Footer />
      </TodosProvider>
    </div>
  );
};
