import Button from '../ui/button';
import styles from './styles.module.css';

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.headline}>Amazing Discounts on Pets Products!</h1>
        <Button title={'Check out'} />
      </div>
    </div>
  );
}

export default Hero;
