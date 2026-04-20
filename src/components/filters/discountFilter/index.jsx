import styles from './styles.module.css';
import Input from '../../ui/input';

function DiscountFilter({ filters, setFilters }) {
  return (
    <div className={styles.discountFilter}>
      <span className={styles.discountFilterTitle}>Discounted items</span>
      <label className={styles.checkboxWrapper}>
        <input
          type="checkbox"
          checked={filters.discounted}
          onChange={(e) => setFilters({ ...filters, discounted: e.target.checked })}
          className={styles.hiddenCheckbox}
        />
        <span className={styles.customCheckbox} />
      </label>
    </div>
  );
}

export default DiscountFilter;
