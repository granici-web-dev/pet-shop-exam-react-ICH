import styles from './styles.module.css';
import { Link } from 'react-router-dom';

const BASE_URL = 'http://127.0.0.1:3333';

function CategoryItem({ item }) {
  return (
    <Link to={`/categories/${item.id}`} className={styles.categoryItem}>
      <img className={styles.categoryItemImg} src={`${BASE_URL}${item.image}`} alt={item.title} />
      <h5 className={styles.title}>{item.title}</h5>
    </Link>
  );
}

export default CategoryItem;
