import Button from '../ui/button';
import styles from './styles.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.headline}>Amazing Discounts on Pets Products!</h1>
        <Button title={'Check out'} />
      </div>
    </section>
  );
}

export default Hero;
