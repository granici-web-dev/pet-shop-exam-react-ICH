import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCategories } from '../../redux/slices/categoriesSlice';
import CategoryItem from '../../components/categoryItem';
import Breadcrumbs from '../../components/ui/breadCrumbs';


function Categories() {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Breadcrumbs items={[{ title: 'Main page', path: '/' }, { title: 'Categories' }]} />
      <div className={styles.categoriesCards}>
        {category.map((item) => {
          return <CategoryItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Categories;
