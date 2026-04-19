import styles from './styles.module.css';
import Hero from '../../components/sections/hero';
import Categories from '../../components/sections/categories';
import GetDiscount from '../../components/sections/getDiscount';
import Sales from '../../components/sections/sales';

function Home() {
  return (
    <div className={styles.home}>
      <Hero />
      <Categories />
      <GetDiscount />
      <Sales />
    </div>
  );
}

export default Home;
