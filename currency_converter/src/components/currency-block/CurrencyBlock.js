import React from 'react';
import { CURRENCIES_RATE } from '../../config';
import './CurrencyBlock.css'

const CurrencyBlock = ({ isRight, value, defaultValue, updateInput, updateSelected }) => {
  return <div className='currency-block'>
    <input type='number' className='currency-input' value={value} min='0'
           onChange={(e) => updateInput(e, isRight)} />
    <select className='currency-select' defaultValue={defaultValue}
            onChange={(e) => updateSelected(e, isRight)}>
      {CURRENCIES_RATE.map(v => {
        return <option key={v} value={v}>{v}</option>;
      })}
    </select>
  </div>;
};
export default CurrencyBlock;