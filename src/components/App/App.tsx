import './App.scss';
import { Header } from '../Header';
import { Main } from '../Main';
import { Footer } from '../Footer';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
