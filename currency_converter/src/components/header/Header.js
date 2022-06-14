import './Header.css';

const Header = ({ currency }) => {
  return <header className='currency-header'>
    <h1>Currency converter</h1>
    {Array.from(currency).filter(value => value[0] !== 'UAN').map(value => <span
      key={value[0]}>{value[0]}&nbsp;=&nbsp;{value[1]}&nbsp;UAN </span>)}
  </header>;
};
export default Header;