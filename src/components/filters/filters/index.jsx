import styles from './styles.module.css';
import PriceFilter from '../priceFilter';
import DiscountFilter from '../discountFilter';
import SortFilter from '../sortFilter';

function Filters({ filters, setFilters }) {
  return (
    <div className={styles.filters}>
      <PriceFilter filters={filters} setFilters={setFilters} />
      <DiscountFilter filters={filters} setFilters={setFilters} />
      <SortFilter filters={filters} setFilters={setFilters} />
    </div>
  );
}

export default Filters;
