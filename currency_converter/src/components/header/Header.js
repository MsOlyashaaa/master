import './Header.css';

const Header = ({ currencies }) => {
  return (
    <header className='currency-header'>
      <h1>Currency converter</h1>
      {Array.from(currencies)
        .filter(currency => currency[0] !== 'UAH')
        .map(value => <span key={value[0]}>{value[0]} = {value[1]} UAN </span>)}
    </header>
  );
};
export default Header;