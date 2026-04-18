import styles from './styles.module.css';
import { Link } from 'react-router-dom';

const BASE_URL = 'http://127.0.0.1:3333';

function CategoryItem({ category }) {
  return (
    <Link to={`/categories/${category.id}`} className={styles.categoryItem}>
      <img
        className={styles.categoryItemImg}
        src={`${BASE_URL}${category.image}`}
        alt={category.title}
      />
      <h5 className={styles.title}>{category.title}</h5>
    </Link>
  );
}

export default CategoryItem;