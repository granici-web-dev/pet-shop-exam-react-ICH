import styles from './styles.module.css';
import Hero from '../../components/hero';
import Categories from '../../components/categories';
import Headline from '../../components/headline';

function Home() {
  return (
    <div className={styles.home}>
      <Hero />
      <Categories />
    </div>
  );
}

export default Home;
