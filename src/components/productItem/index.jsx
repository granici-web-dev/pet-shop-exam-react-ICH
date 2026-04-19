import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import Button from '../ui/button'

const BASE_URL = 'http://127.0.0.1:3333';

function ProductItem({ product }) {
  const discountPercent = Math.round((1 - product.discont_price / product.price) * 100);

  return (
    <Link to={`/products/${product.id}`} className={styles.productItem}>
      <div className={styles.productTop}>
        <img
          className={styles.productImage}
          src={`${BASE_URL}${product.image}`}
          alt={product.title}
        />
        <span className={styles.discountBadge}>-{discountPercent}%</span>
        <Button className={styles.addToCart} title={'Add to cart'} />
      </div>
      <div className={styles.productBottom}>
        <h5 className={styles.productTitle}>{product.title}</h5>
        <div className={styles.productPriceContainer}>
          <p className={styles.productPrice}>${product.discont_price}</p>
          <span className={styles.productDiscountPrice}>${product.price}</span>
        </div>
      </div>
    </Link>
  );
}

export default ProductItem;
