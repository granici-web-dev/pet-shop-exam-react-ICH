import styles from './styles.module.css';
import { useForm } from 'react-hook-form';
import Input from '../ui/input';
import { validationFormInputs } from '../../validator/validatorGetDiscrount';
import SecondaryButton from '../ui/secondaryButton'

function DiscountForm() {
  const { name, phone, email } = validationFormInputs;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  return (
    <form className={styles.discountForm}>
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
            {...register('name', phone)}
          />
          {errors.phone && <p className={styles.errorMessage}>{errors.phone.message}</p>}
        </div>

        <div>
          <Input
            type={'email'}
            id={'email'}
            name={'email'}
            placeholder={'Email'}
            {...register('name', email)}
          />
          {errors.email && <p className={styles.errorMessage}>{errors.email.message}</p>}
        </div>
      </div>
      <SecondaryButton title={'Get a discount'} />
    </form>
  );
}

export default DiscountForm;
