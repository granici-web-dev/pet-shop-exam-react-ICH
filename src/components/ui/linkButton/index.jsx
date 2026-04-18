import styles from './styles.module.css';

function LinkButton({ title, onClick }) {
  return (
    <button onClick={onClick} className={styles.linkButton}>
      {title}
    </button>
  );
}

export default LinkButton;
