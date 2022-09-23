import React from 'react';
import { CURRENCIES_RATE } from '../../config';
import './CurrencyBlock.css';

const CurrencyBlock = ({ isTop, value, defaultValue, updateInput, updateSelected, setLastFocusedTop }) => {
  return (
    <div className='currency-block'>
      <input type='number' className='currency-input' value={value} min='0'
             onChange={(e) => updateInput(e.target.value, isTop)}
             onFocus={() => setLastFocusedTop(isTop)}
      />
      <select className='currency-select' defaultValue={defaultValue}
              onChange={(e) => updateSelected(e.target.value, isTop)}>
        {CURRENCIES_RATE.map(rate => <option key={rate} value={rate}>{rate}</option>)}
      </select>
    </div>);
};
export default CurrencyBlock;