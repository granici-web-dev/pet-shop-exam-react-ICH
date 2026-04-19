import styles from './styles.module.css';

function OrderModal({ onClose }) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h3>Congratulations!</h3>
          <button className={styles.closeBtn} onClick={onClose}>
            ✕
          </button>
        </div>
        <p className={styles.modalText}>Your order has been successfully placed on the website.</p>
        <p className={styles.modalText}>
          A manager will contact you shortly to confirm your order.
        </p>
      </div>
    </div>
  );
}

export default OrderModal;
