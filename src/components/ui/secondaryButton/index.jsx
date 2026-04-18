import styles from './styles.module.css';

function SecondaryButton({ title, onClick }) {
  return (
    <button className={styles.secondaryButton} onClick={onClick}>
      {title}
    </button>
  );
}

export default SecondaryButton;
