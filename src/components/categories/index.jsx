import Headline from '../headline';
import styles from './styles.module.css';
import LinkButton from '../../components/ui/linkButton';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCategories } from '../../redux/slices/categoriesSlice';
import CategoryItem from '../categoryItem';

function Categories() {
  const dispatch = useDispatch();
  const { category, isError, isSuccess, message } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className={styles.categories}>
      <div className={styles.container}>
        <div className={styles.categoriesWrapper}>
          <Headline title={'Categories'} />
          <span className={styles.line} />
          <LinkButton title={'All categories '} />
        </div>
        <div className={styles.categoriesCards}>
          {category.slice(0, 4).map((category) => {
            return <CategoryItem key={category.id} category={category} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Categories;
