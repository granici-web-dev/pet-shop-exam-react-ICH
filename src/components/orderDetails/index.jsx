import styles from './styles.module.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../../redux/slices/cartSlice';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import OrderModal from '../../components/ui/orderModal';

const BASE_URL = 'http://127.0.0.1:3333';

function OrderDetails() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const { register, handleSubmit, reset } = useForm();
  const [showModal, setShowModal] = useState(false);

  const totalItems = items.reduce((sum, item) => sum + item.count, 0);
  const totalPrice = items.reduce((sum, item) => {
    const price = item.discont_price ?? item.price;
    return sum + price * item.count;
  }, 0);

  const onSubmit = async (data) => {
    try {
      await axios.post(`${BASE_URL}/order/send`, { ...data, items });
      dispatch(clearCart());
      reset();
      setShowModal(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.orderDetails}>
      <h3 className={styles.orderTitle}>Order details</h3>
      <p className={styles.itemsCount}>{totalItems} items</p>
      <div className={styles.totalRow}>
        <span className={styles.totalLabel}>Total</span>
        <span className={styles.totalPrice}>${totalPrice.toFixed(2)}</span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.orderForm}>
        <input {...register('name', { required: true })} placeholder="Name" />
        <input {...register('phone', { required: true })} placeholder="Phone number" />
        <input {...register('email', { required: true })} placeholder="Email" />
        <button type="submit" className={styles.orderBtn}>
          Order
        </button>
      </form>
      {showModal && <OrderModal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default OrderDetails;
