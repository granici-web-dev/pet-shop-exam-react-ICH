import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import cartIcon from '../../../assets/icons/cart-empty.svg';

function CartBadge() {
  const { items } = useSelector((state) => state.cart);
  const totalItems = items.reduce((sum, item) => sum + item.count, 0);

  return (
    <Link to="/cart" className={styles.cartLink}>
      <img src={cartIcon} alt="Cart" />
      {totalItems > 0 && <span className={styles.cartBadge}>{totalItems}</span>}
    </Link>
  );
}

export default CartBadge;
