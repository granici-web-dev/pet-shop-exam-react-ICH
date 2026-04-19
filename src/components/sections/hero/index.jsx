import Button from '../../ui/button';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';



function Hero() {
  const navigate = useNavigate();

  const setNavigate = (path) => {
    navigate(`/${path}`);
  };

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.headline}>Amazing Discounts on Pets Products!</h1>
        <Button onClick={() => setNavigate('/sales')} title={'Check out'} />
      </div>
    </section>
  );
}

export default Hero;
