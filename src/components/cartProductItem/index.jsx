import styles from './styles.module.css';
import { incrementCount, decrementCount, removeFromCart } from '../../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';

const BASE_URL = 'http://127.0.0.1:3333';

function CartProductItem({ item }) {
  const dispatch = useDispatch();
  const hasDiscount = item.discont_price !== null;
  const currentPrice = hasDiscount ? item.discont_price : item.price;

  return (
    <div className={styles.cartProductItem}>
      <img
        className={styles.cartProductItemImage}
        src={`${BASE_URL}${item.image}`}
        alt={item.title}
      />
      <div className={styles.contentContainer}>
        <div className={styles.titleRow}>
          <h4 className={styles.title}>{item.title}</h4>
          <button className={styles.removeBtn} onClick={() => dispatch(removeFromCart(item.id))}>
            ✕
          </button>
        </div>
        <div className={styles.priceRow}>
          <div className={styles.counter}>
            <button onClick={() => dispatch(decrementCount(item.id))}>−</button>
            <span>{item.count}</span>
            <button onClick={() => dispatch(incrementCount(item.id))}>+</button>
          </div>
          <span className={styles.currentPrice}>${currentPrice * item.count}</span>
          {hasDiscount && <span className={styles.oldPrice}>${item.price * item.count}</span>}
        </div>
      </div>
    </div>
  );
}

export default CartProductItem;
