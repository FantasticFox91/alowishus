import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';
import Logo from '../logo/logo';
import './header.scss';

function Header(): JSX.Element {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split('/');
  return (
    <header className='page-header container'>
      <Logo />
      <button className={burgerStatus ? 'page-header__burger page-header__burger--open' : 'page-header__burger'} onClick={() => setBurgerStatus(!burgerStatus)}>
        <span className="visually-hidden">Открыть/Закрыть бургер меню</span>
      </button>
      <div className="header__nav">
        <ul className="page-header__list">
          <li className="page-header__item">
            <Link className={splitLocation[1] === 'menu' ? 'page-header__link page-header__link--active' : 'page-header__link'} to={AppRoute.Menu}>Cafe Menu</Link>
          </li>
          <li className="page-header__item">
            <Link className={splitLocation[1] === 'about' ? 'page-header__link page-header__link--active' : 'page-header__link'} to={AppRoute.About}>About Us</Link>
          </li>
          <li className="page-header__item">
            <Link className={splitLocation[1] === 'map' ? 'page-header__link page-header__link--active' : 'page-header__link'} to={AppRoute.Map}>Find Us</Link>
          </li>
          <li className="page-header__item">
            <Link className={splitLocation[1] === 'catering' ? 'page-header__link page-header__link--active' : 'page-header__link'} to={AppRoute.Catering}>Alowishus Catering</Link>
          </li>
        </ul>
        <div className="page-header__user-buttons">
          <button className='page-header__button page-header__button--cart' type='button'>
            <span className="visually-hidden">Корзина</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className='page-header__icon' d="M8.13201 2.50391L4.42001 8.99991H3.00001C2.68801 8.99991 2.39501 9.14591 2.20501 9.39291C2.01601 9.64091 1.95301 9.96291 2.03501 10.2629L4.83401 20.5259C5.07001 21.3939 5.86401 21.9999 6.76401 21.9999H17.237C18.135 21.9999 18.929 21.3949 19.167 20.5249L21.966 10.2619C22.048 9.96191 21.986 9.63991 21.796 9.39191C21.605 9.14591 21.312 8.99991 21 8.99991H19.58L15.868 2.50391L14.132 3.49591L17.277 8.99991H6.72301L9.86801 3.49591L8.13201 2.50391ZM14 12.9999H16V17.9999H14V12.9999ZM8.00001 12.9999H10V17.9999H8.00001V12.9999Z"/>
            </svg>
          </button>
          <button className='page-header__button button-primarly' type='button'>Buy gift vouchers</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
