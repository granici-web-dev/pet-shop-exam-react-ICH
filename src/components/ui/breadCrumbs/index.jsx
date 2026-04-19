import { Link } from 'react-router-dom';
import styles from './styles.module.css';

function Breadcrumbs({ items }) {
  return (
    <div className={styles.breadcrumbs}>
      {items.map((item, index) => (
        <span key={index}>
          {item.path ? (
            <Link to={item.path} className={styles.breadcrumbLink}>
              {item.title}
            </Link>
          ) : (
            <span className={styles.breadcrumbCurrent}>{item.title}</span>
          )}
          {index < items.length - 1 && <span className={styles.separator} />}
        </span>
      ))}
    </div>
  );
}

export default Breadcrumbs;
