import styles from './styles.module.css';
import Input from '../../ui/input';

function DiscountFilter({ filters , setFilters}) {
  return (
    <div className={styles.discountFilter}>
      <span className={styles.discountFilterTitle}>Discounted items</span>
      <Input
        type={'checkbox'}
        checked={filters.discounted}
        className={styles.discountFilterCheckbox}
        onChange={(e) => setFilters({ ...filters, discounted: e.target.checked })}
      />
    </div>
  );
}

export default DiscountFilter;
