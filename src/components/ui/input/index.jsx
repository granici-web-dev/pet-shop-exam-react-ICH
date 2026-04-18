import styles from './styles.module.css';

function Input({ type, id, name, ...rest }) {
  return <input className={styles.customInput} type={type} id={id} name={name} {...rest} />;
}

export default Input;