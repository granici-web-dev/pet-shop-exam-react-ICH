import styles from './styles.module.css';
import Hero from '../../components/hero';
import Categories from '../../components/categories';
import GetDiscount from '../../components/getDiscount';

function Home() {
  return (
    <div className={styles.home}>
      <Hero />
      <Categories />
      <GetDiscount />
    </div>
  );
}

export default Home;
