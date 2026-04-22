import styles from './styles.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../../redux/slices/cartSlice';
import { useForm } from 'react-hook-form';
import { validationFormInputs } from '../../validator/validatorGetDiscrount';
import Input from '../ui/input';
import Button from '../ui/button';
import axios from 'axios';
import { BASE_URL } from '../../constants/config';

function OrderDetails({ onOrderSuccess }) {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const { name, phone, email } = validationFormInputs;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

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
      onOrderSuccess();
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
        <div>
          <Input
            className={styles.customInput}
            type="text"
            placeholder="Name"
            {...register('name', name)}
          />
          {errors.name && <p className={styles.errorMessage}>{errors.name.message}</p>}
        </div>
        <div>
          <Input
            className={styles.customInput}
            type="number"
            placeholder="Phone number"
            {...register('phone', phone)}
          />
          {errors.phone && <p className={styles.errorMessage}>{errors.phone.message}</p>}
        </div>
        <div>
          <Input
            className={styles.customInput}
            type="email"
            placeholder="Email"
            {...register('email', email)}
          />
          {errors.email && <p className={styles.errorMessage}>{errors.email.message}</p>}
        </div>
        <Button type={'submit'} title="Order" className={styles.orderBtn} />
      </form>
    </div>
  );
}

export default OrderDetails;