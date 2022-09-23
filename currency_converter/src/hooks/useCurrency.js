import { useEffect, useState } from 'react';
import { BANK_URL_API, CURRENCIES_RATE } from '../config';

export function useCurrency() {
  const [isLoading, setLoading] = useState(true);
  const [currency, setCurrency] = useState(new Map());

  useEffect(() => {
    setLoading(true);
    fetch(BANK_URL_API)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const temporaryMap = new Map();
        temporaryMap.set('UAH', 1);
        data
          .filter(value => CURRENCIES_RATE.includes(value['cc']))
          .forEach(value => (
            temporaryMap.set(value['cc'], value['rate'])
          ));
        setCurrency(temporaryMap);
        setLoading(false);
      }).catch(error=>console.log(error.message));
  }, [setLoading, setCurrency]);
  return [currency, isLoading];
}