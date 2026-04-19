import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../../redux/slices/productsSlice';
import { fetchCategories } from '../../redux/slices/categoriesSlice';
import Breadcrumbs from '../../components/ui/breadCrumbs';
import Headline from '../../components/headline';
import Filters from '../../components/filters/filters';
import ProductItem from '../../components/productItem';
import styles from './styles.module.css';

function CategoryProducts() {
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { category } = useSelector((state) => state.categories);

  const [filters, setFilters] = useState({
    priceFrom: '',
    priceTo: '',
    discounted: false,
    sort: 'default',
  });

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  const currentCategory = category?.find((c) => c.id === Number(categoryId));
  const categoryProducts = products
    ?.filter((p) => p.categoryId === Number(categoryId))
    .filter((p) => {
      const price = p.discont_price ?? p.price;
      if (filters.priceFrom && price < Number(filters.priceFrom)) return false;
      if (filters.priceTo && price > Number(filters.priceTo)) return false;
      if (filters.discounted && p.discont_price === null) return false;
      return true;
    })
    .sort((a, b) => {
      const priceA = a.discont_price ?? a.price;
      const priceB = b.discont_price ?? b.price;
      if (filters.sort === 'asc') return priceA - priceB;
      if (filters.sort === 'desc') return priceB - priceA;
      return 0;
    });

  return (
    <div className={styles.container}>
      <Breadcrumbs
        items={[
          { title: 'Main page', path: '/' },
          { title: 'Categories', path: '/categories' },
          { title: currentCategory?.title || '' },
        ]}
      />
      <div className={styles.titleDiv}>
        <Headline title={currentCategory?.title || ''} />
      </div>

      <Filters filters={filters} setFilters={setFilters} />
      <div className={styles.productsCards}>
        {categoryProducts?.map((item) => (
          <ProductItem key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default CategoryProducts;
