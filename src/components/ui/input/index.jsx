import styles from './styles.module.css';

function Input({ type, id, name, className, ...rest }) {
  return (
    <input
      className={`${styles.customInput} ${className || ''}`}
      type={type}
      id={id}
      name={name}
      {...rest}
    />
  );
}

export default Input;

