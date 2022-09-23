import { Currency } from './components/currency-block/Currency';
import Header from './components/header/Header';
import Loader from './components/loader/Loader';
import { useCurrency } from './hooks/useCurrency';

function App() {
  const [currencies, isLoading] = useCurrency();


  return (isLoading ? <Loader /> :
      <div className='App'>
        <Header currencies={currencies} />
        <Currency currencies={currencies} />
      </div>
  );
}

export default App;
