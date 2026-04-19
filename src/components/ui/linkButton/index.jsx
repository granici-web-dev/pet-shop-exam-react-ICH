import styles from './styles.module.css';

function LinkButton({ title, onClick, className }) {
  return (
    <button onClick={onClick} className={`${styles.linkButton} ${className || ''}`}>
      {title}
    </button>
  );
}

export default LinkButton;

