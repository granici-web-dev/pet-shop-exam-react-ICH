import styles from './styles.module.css';

function Button({ title, onClick, className }) {
  return (
    <button className={`${styles.primaryBtn} ${className || ''}`} onClick={onClick}>
      {title}
    </button>
  );
}

export default Button;
