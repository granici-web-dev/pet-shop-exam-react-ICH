import styles from './styles.module.css';

function SortFilter({ filters, setFilters }) {
  return (
    <div className={styles.sortFilter}>
      <span className={styles.sortFilterTitle}>Sorted</span>
      <select
        value={filters.sort}
        className={styles.sortFilterSelect}
        onChange={(e) => setFilters({ ...filters, sort: e.target.value })}>
        <option value="default">by default</option>
        <option value="desc">price: high-low</option>
        <option value="asc">price: low-high</option>
      </select>
    </div>
  );
}

export default SortFilter;
