import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";

const navMenu = [
  {
    id: 1,
    path: '/',
    title: 'Main Page',
  },
  {
    id: 2,
    path: '/categories',
    title: 'Categories',
  },
  {
    id: 3,
    path: '/products',
    title: 'All products',
  },
  {
    id: 4,
    path: '/sales',
    title: 'All sales',
  },
];

function Nav() {
  return <nav className={styles.nav}>
    {navMenu.map((nav) => {
      return (
        <NavLink
          to={nav.path}
          key={nav.id}
          className={({ isActive }) => (isActive ? `${styles.navLink} ${styles.active}`: `${styles.navLink}`)}>
          {nav.title}
        </NavLink>
      );
    })}
  </nav>
}

export default Nav;