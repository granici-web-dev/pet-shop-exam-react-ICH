import Headline from '../../headline';
import styles from './styles.module.css';
import LinkButton from '../../ui/linkButton';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCategories } from '../../../redux/slices/categoriesSlice';
import CategoryItem from '../../categoryItem';
import { useNavigate } from 'react-router-dom';

function Categories() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { category, isLoading, isError, message } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const setNavigate = (path) => {
    navigate(`/${path}`);
  };

  return (
    <section className={styles.categories}>
      <div className={styles.container}>
        <div className={styles.categoriesWrapper}>
          <Headline title={'Categories'} />
          <span className={styles.line} />
          <LinkButton onClick={() => setNavigate('/categories')} title={'All categories '} />
        </div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className={styles.categoriesCards}>
            {category.slice(0, 4).map((item) => (
              <CategoryItem key={item.id} item={item} />
            ))}
          </div>
        )}
        {isError && <p className={styles.errorMessage}>{message}</p>}
      </div>
    </section>
  );
}

export default Categories;
