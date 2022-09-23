import { useCallback, useState } from 'react';
import { CURRENCIES_RATE } from '../../config';
import CurrencyBlock from './CurrencyBlock';
import './CurrencyBlocks.css';

export function Currency({ currencies }) {
  const [values, setValues] = useState({ bottom: 1, top: 1 });
  const [currency, setCurrency] = useState({ bottom: CURRENCIES_RATE[0], top: CURRENCIES_RATE[0] });
  const [isLastFocusedTop, setLastFocusedTop] = useState(true);

  const updateInput = useCallback((newInputValue, isTop) => {
    const value = Number(Math.max(newInputValue, 0));
    if (isTop) {
      const newValue = newInputValue * currencies.get(currency['top']) / currencies.get(currency['bottom']);
      setValues({ top: value, bottom: Number(newValue.toFixed(4)) });
    } else {
      const newValue = newInputValue * currencies.get(currency['bottom']) / currencies.get(currency['top']);
      setValues({ bottom: value, top: Number(newValue.toFixed(4)) });
    }
  }, [setValues, currencies, currency]);

  const updateSelected = useCallback((newCurrency, isTop) => {
    if (isTop) {
      setCurrency({ ...currency, top: newCurrency });
    } else {
      setCurrency({ ...currency, bottom: newCurrency });
    }
    if (isLastFocusedTop) {
      let newValue;
      if (isTop) {
        newValue = values['top'] * currencies.get(newCurrency) / currencies.get(currency['bottom']);
      } else {
        newValue = values['top'] * currencies.get(currency['top']) / currencies.get(newCurrency);
      }
      setValues({ ...values, bottom: Number(newValue.toFixed(4)) });
    } else {
      let newValue;
      if (isTop) {
        newValue = values['bottom'] * currencies.get(currency['bottom']) / currencies.get(newCurrency);
      } else {
        newValue = values['bottom'] * currencies.get(newCurrency) / currencies.get(currency['top']);
      }
      setValues({ ...values, top: Number(newValue.toFixed(4)) });
    }
  }, [isLastFocusedTop, currency, values, currencies]);

  return (
    <div className='currency'>
      <CurrencyBlock
        isTop
        value={values['top']}
        defaultValue={currency['top']}
        updateInput={updateInput}
        updateSelected={updateSelected}
        setLastFocusedTop={setLastFocusedTop}
      />
      <CurrencyBlock
        value={values['bottom']}
        defaultValue={currency['bottom']}
        updateInput={updateInput}
        updateSelected={updateSelected}
        setLastFocusedTop={setLastFocusedTop}
      />
    </div>
  );
}

