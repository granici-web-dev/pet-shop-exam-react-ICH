import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCategories } from '../../redux/slices/categoriesSlice';
import CategoryItem from '../../components/categoryItem';
import Breadcrumbs from '../../components/ui/breadCrumbs';
import Headline from '../../components/headline';


function Categories() {
  const dispatch = useDispatch();
  const { category, isLoading, isError, message } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Breadcrumbs items={[{ title: 'Main page', path: '/' }, { title: 'Categories' }]} />
      <div className={styles.titleDiv}>
        <Headline title={'Categories'} />
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.categoriesCards}>
          {category.map((item) => {
            return <CategoryItem key={item.id} item={item} />;
          })}
        </div>
      )}
      {isError && <p className={styles.errorMessage}>{message}</p>}
    </div>
  );
}

export default Categories;
