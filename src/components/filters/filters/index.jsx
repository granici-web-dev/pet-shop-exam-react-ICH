import styles from './styles.module.css';
import PriceFilter from '../priceFilter';
import DiscountFilter from '../discountFilter';
import SortFilter from '../sortFilter';

function Filters({ filters, setFilters, hideDiscount }) {
  return (
    <div className={styles.filters}>
      <PriceFilter filters={filters} setFilters={setFilters} />
      {!hideDiscount && <DiscountFilter filters={filters} setFilters={setFilters} />}
      <SortFilter filters={filters} setFilters={setFilters} />
    </div>
  );
}

export default Filters;
