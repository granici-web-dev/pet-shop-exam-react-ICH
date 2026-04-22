import { NavLink, Outlet } from 'react-router-dom';
import styles from './styles.module.css';
import Header from '../sections/header';
import Footer from '../sections/footer';

function Layout() {
  return (
    <div className={styles.layout}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
