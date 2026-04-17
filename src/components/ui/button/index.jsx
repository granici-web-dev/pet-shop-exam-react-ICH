import styles from './styles.module.css';

function Button({ title, onClick }) {
  return (
    <button className={styles.primaryBtn} onClick={onClick}>
      {title}
    </button>
  );
}

export default Button;
