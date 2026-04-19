import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import Button from '../ui/button'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';

const BASE_URL = 'http://127.0.0.1:3333';

function ProductItem({ product }) {
  const dispatch = useDispatch();

  const hasDiscount = product.discont_price !== null;
  const discountPercent = hasDiscount
    ? Math.round((1 - product.discont_price / product.price) * 100)
    : 0;

    const { items } = useSelector((state) => state.cart);
    const isInCart = items.some((item) => item.id === product.id);

  return (
    <Link to={`/products/${product.id}`} className={styles.productItem}>
      <div className={styles.productTop}>
        <img
          className={styles.productImage}
          src={`${BASE_URL}${product.image}`}
          alt={product.title}
        />
        {hasDiscount && <span className={styles.discountBadge}>-{discountPercent}%</span>}
        <Button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (!isInCart) dispatch(addToCart(product));
          }}
          className={styles.addToCart}
          title={isInCart ? 'Added' : 'Add to cart'}
          isAdded={isInCart}
        />
      </div>
      <div className={styles.productBottom}>
        <h5 className={styles.productTitle}>{product.title}</h5>
        <div className={styles.productPriceContainer}>
          <p className={styles.productPrice}>
            ${hasDiscount ? product.discont_price : product.price}
          </p>
          {hasDiscount && <span className={styles.productDiscountPrice}>${product.price}</span>}
        </div>
      </div>
    </Link>
  );
}

export default ProductItem;
