import styles from './styles.module.css';

const BASE_URL = 'http://127.0.0.1:3333';

function ProductItem({ product }) {
  const discountPercent = Math.round((1 - product.discont_price / product.price) * 100);

  return (
    <div className={styles.productItem}>
      <div className={styles.productTop}>
        <img
          className={styles.productImage}
          src={`${BASE_URL}${product.image}`}
          alt={product.title}
        />
        <span className={styles.discountBadge}>-{discountPercent}%</span>
      </div>
      <div className={styles.productBottom}>
        <h5 className={styles.productTitle}>{product.title}</h5>
        <div className={styles.productPriceContainer}>
          <p className={styles.productPrice}>${product.discont_price}</p>
          <span className={styles.productDiscountPrice}>${product.price}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
