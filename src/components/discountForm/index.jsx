import styles from './styles.module.css';
import { useForm } from 'react-hook-form';
import Input from '../ui/input';
import { validationFormInputs } from '../../validator/validatorGetDiscrount';
import SecondaryButton from '../ui/secondaryButton';
import axios from 'axios';
import { BASE_URL } from '../../constants/config';

function DiscountForm() {
  const { name, phone, email } = validationFormInputs;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const getDiscount = async (data) => {
    try {
      const response = await axios.post(`${BASE_URL}/sale/send`, data);
      console.log(response.data);
      reset();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form className={styles.discountForm} onSubmit={handleSubmit(getDiscount)}>
      <div className={styles.discountFormInputs}>
        <div>
          <Input
            type={'text'}
            id={'name'}
            name={'name'}
            placeholder={'Name'}
            {...register('name', name)}
          />
          {errors.name && <p className={styles.errorMessage}>{errors.name.message}</p>}
        </div>

        <div>
          <Input
            type={'number'}
            id={'phone'}
            name={'phone'}
            placeholder={'Phone number'}
            {...register('phone', phone)}
          />
          {errors.phone && <p className={styles.errorMessage}>{errors.phone.message}</p>}
        </div>

        <div>
          <Input
            type={'email'}
            id={'email'}
            name={'email'}
            placeholder={'Email'}
            {...register('email', email)}
          />
          {errors.email && <p className={styles.errorMessage}>{errors.email.message}</p>}
        </div>
      </div>
      <SecondaryButton title={'Get a discount'} />
    </form>
  );
}

export default DiscountForm;
