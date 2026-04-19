import { NavLink, Outlet } from 'react-router-dom';
import styles from './styles.module.css';
import Header from '../sections/header';
import Footer from '../sections/footer';

function Layout() {
  return (
    <div className={styles.layout}>
      <Header />
      <main>
        <div className={styles.container}>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
