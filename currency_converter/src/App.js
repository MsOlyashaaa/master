import { useCallback, useState } from 'react';
import './App.css';
import CurrencyBlock from './components/currency-block/CurrencyBlock';
import Header from './components/header/Header';
import Loader from './components/loader/Loader';
import { CURRENCIES_RATE } from './config';
import { useCurrency } from './hooks/useCurrency';


function App() {
  const [values, setValues] = useState({ right: 1, left: 1 });
  const [selected, setSelected] = useState({ right: CURRENCIES_RATE[0], left: CURRENCIES_RATE[0] });
  const [currency, isLoading] = useCurrency();

  const updateInput = useCallback((e, isRight) => {
    const value = Number(Math.max(e.target.value, 0));
    if (isRight) {
      const newValue = value * currency.get(selected['right']) / currency.get(selected['left']);
      setValues({ right: e.target.value, left: Number(newValue.toFixed(4)) });
    } else {
      const newValue = value * currency.get(selected['left']) / currency.get(selected['right']);
      setValues({ left: e.target.value, right: Number(newValue.toFixed(4)) });
    }
  }, [setValues, currency, selected]);

  const updateSelected = useCallback((e, isRight) => {
    if (isRight) {
      setSelected({ ...selected, right: e.target.value });
      const newValue = values['right'] * currency.get(e.target.value) / currency.get(selected['left']);
      setValues({ ...values, left: Number(newValue.toFixed(4)) });
    } else {
      setSelected({ ...selected, left: e.target.value });
      const newValue = values['left'] * currency.get(e.target.value) / currency.get(selected['right']);
      setValues({ ...values, right: Number(newValue.toFixed(4)) });
    }
  }, [setSelected, selected, values, setValues, currency]);

  return (isLoading ? <Loader /> :
      <div className='App'>
        <Header currency={currency} />
        <div className='currency'>
          <CurrencyBlock
            value={values['left']}
            defaultValue={selected['left']}
            updateInput={updateInput}
            updateSelected={updateSelected} />
          <CurrencyBlock
            isRight
            value={values['right']}
            defaultValue={selected['right']}
            updateInput={updateInput}
            updateSelected={updateSelected} />
        </div>
      </div>
  );
}

export default App;
