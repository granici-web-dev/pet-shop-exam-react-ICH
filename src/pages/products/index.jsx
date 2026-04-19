import styles from './styles.module.css';
import Breadcrumbs from '../../components/ui/breadCrumbs';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from '../../redux/slices/productsSlice';
import ProductItem from '../../components/productItem';
import Headline from '../../components/headline';

function Products() {
  const dispatch = useDispatch();
  const { products, isLoading, isError, message } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Breadcrumbs items={[{ title: 'Main page', path: '/' }, { title: 'All products' }]} />
      <div className={styles.titleDiv}>
        <Headline title={'All products'} />
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.productsCards}>
          {products.map((item) => {
            return <ProductItem key={item.id} product={item} />;
          })}
        </div>
      )}
      {isError && <p className={styles.errorMessage}>{message}</p>}
    </div>
  );
}

export default Products;
