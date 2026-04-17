import styles from './styles.module.css';
import Hero from '../../components/hero';
import Categories from '../../components/categories'

function Home() {
  return (
    <div className={styles.home}>
      <Hero />
      <Categories />
    </div>
  );
}

export default Home;
