import styles from './styles.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Headline from '../../components/headline';
import LinkButton from '../../components/ui/linkButton';
import CartProductItem from '../../components/cartProductItem';
import Button from '../../components/ui/button';
import { useSelector } from 'react-redux';
import OrderDetails from '../../components/orderDetails';
import OrderModal from '../../components/ui/orderModal';

function Cart() {
  const navigate = useNavigate();
  const { items } = useSelector((state) => state.cart);
  const [showModal, setShowModal] = useState(false);

  return (
    <section className={styles.cart}>
      <div className={styles.container}>
        <div className={styles.cartHeader}>
          <Headline title={'Shopping cart'} />
          <span className={styles.line} />
          <LinkButton onClick={() => navigate('/products')} title={'Back to the store'} />
        </div>

        {items.length === 0 && !showModal ? (
          <div className={styles.emptyCart}>
            <p className={styles.emptyText}>
              Looks like you have no items in your basket currently.
            </p>
            <Button title={'Continue Shopping'} onClick={() => navigate('/products')} />
          </div>
        ) : (
          <div className={styles.cartLayout}>
            <div className={styles.cartItems}>
              {items.map((item) => (
                <CartProductItem key={item.id} item={item} />
              ))}
            </div>
            {items.length > 0 && <OrderDetails onOrderSuccess={() => setShowModal(true)} />}
          </div>
        )}

        {showModal && <OrderModal onClose={() => setShowModal(false)} />}
      </div>
    </section>
  );
}

export default Cart;
