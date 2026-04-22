import styles from './styles.module.css';

function Button({ type = 'button', title, onClick, className, isAdded }) {
  return (
    <button
      type={type}
      className={`${styles.primaryBtn} ${isAdded ? styles.added : ''} ${className || ''}`}
      onClick={onClick}>
      {title}
    </button>
  );
}

export default Button;
