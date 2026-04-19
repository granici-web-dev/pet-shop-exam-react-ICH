import styles from './styles.module.css';
import Input from '../../ui/input'

function PriceFilter({ filters, setFilters }) {
  return (
    <div className={styles.priceFilter}>
      <span className={styles.priceFilterTitle}>Price</span>
      <Input
        type={'number'}
        placeholder={'from'}
        className={styles.filterInput}
        value={filters.priceFrom}
        onChange={(e) => setFilters({ ...filters, priceFrom: e.target.value })}
      />

      <Input
        type={'number'}
        placeholder={'to'}
        className={styles.filterInput}
        value={filters.priceTo}
        onChange={(e) => setFilters({ ...filters, priceTo: e.target.value })}
      />
    </div>
  );
}

export default PriceFilter;