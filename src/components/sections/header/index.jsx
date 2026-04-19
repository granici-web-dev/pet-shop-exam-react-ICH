import styles from './styles.module.css';
import { NavLink } from 'react-router-dom';

import Nav from '../../nav';

import Logo from '../../../assets/logo.svg';
import HamburgerMenu from '../../../assets/icons/hamburger-menu.svg';
import CartBadge from '../../ui/cartBadge';

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
            <CartBadge />
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
