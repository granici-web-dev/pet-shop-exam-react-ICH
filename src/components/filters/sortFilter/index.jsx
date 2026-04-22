import styles from './styles.module.css';
import { useState, useRef, useEffect } from 'react';

const options = [
  { value: 'default', label: 'by default' },
  { value: 'desc', label: 'price: high-low' },
  { value: 'asc', label: 'price: low-high' },
];

function SortFilter({ filters, setFilters }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const currentLabel = options.find((o) => o.value === filters.sort)?.label;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.sortFilter}>
      <span className={styles.sortFilterTitle}>Sorted</span>
      <div className={styles.selectWrapper} ref={ref}>
        <button
          type="button"
          className={`${styles.selectButton} ${isOpen ? styles.open : ''}`}
          onClick={() => setIsOpen(!isOpen)}>
          <span>{currentLabel}</span>
          <svg
            className={`${styles.arrow} ${isOpen ? styles.arrowUp : ''}`}
            width="12"
            height="8"
            viewBox="0 0 12 8">
            <path d="M1 1l5 5 5-5" stroke="#282828" fill="none" strokeWidth="1.5" />
          </svg>
        </button>
        {isOpen && (
          <ul className={styles.dropdown}>
            {options.map((option) => (
              <li
                key={option.value}
                className={`${styles.option} ${filters.sort === option.value ? styles.active : ''}`}
                onClick={() => {
                  setFilters({ ...filters, sort: option.value });
                  setIsOpen(false);
                }}>
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SortFilter;
