import styles from './styles.module.css';
import { NavLink } from 'react-router-dom';

import Nav from '../../nav';

import Logo from '../../../assets/logo.svg';
import Cart from '../../../assets/icons/cart-empty.svg';
import HamburgerMenu from '../../../assets/icons/hamburger-menu.svg'

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerWrapper}>
          <div>
            <NavLink to={'/'}>
              <img src={Logo} alt="Logo" />
            </NavLink>
          </div>
          <div className={styles.navWrapper}>
            <Nav />
          </div>
          <div className={styles.menuActions}>
            <NavLink to={'/cart'}>
              <img src={Cart} alt="Cart" />
            </NavLink>
            <button className={styles.HamburgerMenuIcon}>
              <img src={HamburgerMenu} alt="Menu" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
