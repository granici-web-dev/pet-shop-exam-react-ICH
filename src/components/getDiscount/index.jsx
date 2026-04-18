import styles from './styles.module.css';
import DiscountImage from '../../assets/images/get-discount-section-img.png';
import DiscountForm from '../discountForm';

function GetDiscount() {
  return (
    <section className={styles.getDiscount}>
      <div className={styles.container}>
        <div className={styles.getDiscountWrapper}>
          <div className={styles.headlineDiv}>
            <h2 className={styles.getDiscountHeadline}>5% off on the first order</h2>
          </div>
          <div className={styles.getDiscountContent}>
            <img className={styles.discountImage} src={DiscountImage} alt="dogs and cats image" />
            <div className={styles.formDiv}>
              <DiscountForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetDiscount;
