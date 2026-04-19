import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import Headline from '../../components/headline';
import LinkButton from '../../components/ui/linkButton';
import CartProductItem from '../../components/cartProductItem';
import { useSelector } from 'react-redux';
import OrderDetails from '../../components/orderDetails';

function Cart() {
  const navigate = useNavigate();

  const { items } = useSelector((state) => state.cart);

  const setNavigate = (path) => {
    navigate(`/${path}`);
  };

  return (
    <section className={styles.cart}>
      <div className={styles.container}>
        <div className={styles.categoriesWrapper}>
          <Headline title={'Shopping cart'} />
          <span className={styles.line} />
          <LinkButton onClick={() => setNavigate('/products')} title={'Back to the store'} />
        </div>
        <div className={styles.cartLayout}>
          <div className={styles.cartItems}>
            {items.map((item) => (
              <CartProductItem key={item.id} item={item} />
            ))}
          </div>
          <OrderDetails />
        </div>
      </div>
    </section>
  );
}

export default Cart;
