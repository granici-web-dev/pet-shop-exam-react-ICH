import styles from './styles.module.css';

function Button({ title, onClick, className, isAdded }) {
  return (
    <button
      className={`${styles.primaryBtn} ${isAdded ? styles.added : ''} ${className || ''}`}
      onClick={onClick}>
      {title}
    </button>
  );
}

export default Button;
